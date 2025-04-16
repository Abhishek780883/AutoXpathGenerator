
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

import java.nio.file.Files;
import java.nio.file.Paths;

public class Main extends Application {
    @Override
    public void start(Stage primaryStage) throws Exception {
        WebView webView = new WebView();
        WebEngine webEngine = webView.getEngine();

        TextField urlField = new TextField("https://example.com");
        urlField.setPrefWidth(800);
        Button loadBtn = new Button("Load");
        Button genBtn = new Button("Generate XPaths");

        loadBtn.setOnAction(e -> webEngine.load(urlField.getText()));

        genBtn.setOnAction(e -> {
            try {
                String script = new String(Files.readAllBytes(Paths.get("resources/content.js")));
                webEngine.executeScript(script);
                webEngine.executeScript("start();");
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        });

        HBox controls = new HBox(5, urlField, loadBtn, genBtn);
        BorderPane root = new BorderPane();
        root.setTop(controls);
        root.setCenter(webView);

        Scene scene = new Scene(root, 1200, 800);
        primaryStage.setTitle("JavaFX Full XPath Generator");
        primaryStage.setScene(scene);
        primaryStage.show();

        webEngine.load(urlField.getText());
    }

    public static void main(String[] args) {
        launch(args);
    }
}
