/*import javafx.application.Application;
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
}*/


//Version 2

/*
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception {
        WebView webView = new WebView();
        WebEngine webEngine = webView.getEngine();

        // 4. Spoof user agent
        webEngine.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
                "AppleWebKit/537.36 (KHTML, like Gecko) " +
                "Chrome/122.0.0.0 Safari/537.36");
        webEngine.getLoadWorker().stateProperty().addListener((obs, oldState, newState) -> {
            System.out.println("Loading: " + newState);
        });
        // 5. Listen for errors
        webEngine.getLoadWorker().exceptionProperty().addListener((obs, old, ex) -> {
            if (ex != null) ex.printStackTrace();
        });
        webEngine.getLoadWorker().stateProperty().addListener((obs, old, state) -> {
            System.out.println("Loading: " + state);
        });

        TextField urlField = new TextField("https://example.com");
        urlField.setPrefWidth(800);
        Button loadBtn = new Button("Load");
        Button genBtn = new Button("Generate XPaths");

        loadBtn.setOnAction(e -> webEngine.load(urlField.getText()));

        genBtn.setOnAction(e -> {
            try {
                */
/*InputStream input = getClass().getResourceAsStream("/content.js");
                String jsCode = new String(input.readAllBytes(), StandardCharsets.UTF_8);*//*

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

        Scene scene = new Scene(root, 1200, 720);
        primaryStage.setTitle("JavaFX Full XPath Generator");
        primaryStage.setScene(scene);
        primaryStage.show();

        webEngine.load(urlField.getText());
    }

    public static void main(String[] args) {
        // 1. TLS
        System.setProperty("https.protocols", "TLSv1.3,TLSv1.2");
        System.setProperty("jdk.tls.client.protocols", "TLSv1.3,TLSv1.2");
        // 2. Proxy (if needed)
        // System.setProperty("http.proxyHost", "proxy.mycompany.com");
        // System.setProperty("http.proxyPort", "8080");
        // 3. Launch JavaFX
        launch(args);
    }
}*/


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
        // Zoom controls
        double[] zoomLevel = {1.0};
        Button zoomInBtn = new Button("Zoom In");
        Button zoomOutBtn = new Button("Zoom Out");
        Button resetZoomBtn = new Button("Reset Zoom");
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
        zoomInBtn.setOnAction(e -> {
            zoomLevel[0] += 0.1;
            webView.setZoom(zoomLevel[0]);
        });
        zoomOutBtn.setOnAction(e -> {
            zoomLevel[0] = Math.max(0.1, zoomLevel[0] - 0.1);
            webView.setZoom(zoomLevel[0]);
        });
        resetZoomBtn.setOnAction(e -> {
            zoomLevel[0] = 1.0;
            webView.setZoom(zoomLevel[0]);
        });
        HBox controls = new HBox(5, urlField, loadBtn, genBtn, zoomInBtn, zoomOutBtn, resetZoomBtn);
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