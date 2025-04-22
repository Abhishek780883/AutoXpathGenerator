/*chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "start") {
            start();
        }
    }
);*/

/*function start() {
    var allElements = ["input", "select", "textarea", "button", "a","div"];

    for (j = 0; j < allElements.length; j++) {
        var tagnam = allElements[j];
        var elements = document.getElementsByTagName(tagnam);
        var len = elements.length;
       
        if (tagnam == "input") {
            console.log("inside input");
            for (i = 0; i < len; i++) {
                if (elements[i].getAttribute("type") != "hidden") {
                    if (elements[i].getAttribute("style") == null) {
                        fetchXpaths(tagnam, elements[i]);
                    } else if (elements[i].getAttribute("style") != null) {
                        if (!elements[i].getAttribute("style").includes("display")) {
                            fetchXpaths(tagnam, elements[i]);
                        }
                    }
                }
            }


        }
        else if (tagnam == "select" || tagnam == "textarea" || tagnam == "button" || tagnam == "a") {
            for (k = 0; k < len; k++) {
                if (elements[k].getAttribute("style") == null) {
                    fetchXpaths(tagnam, elements[k]);
                } else if (elements[k].getAttribute("style") != null) {
                    if (!elements[k].getAttribute("style").includes("display")) {
                        fetchXpaths(tagnam, elements[k]);
                    }
                }
            }
        }

        else if(tagnam == "div"){
            for (k = 0; k < len; k++) {
                if (elements[k].getAttribute("style") == null && elements[k].getAttribute("draggable") == "true") {
                    fetchXpaths(tagnam, elements[k]);
                } else if (elements[k].getAttribute("style") != null) {
                    if (!elements[k].getAttribute("style").includes("display") && elements[k].getAttribute("draggable") == "true") {
                        fetchXpaths(tagnam, elements[k]);
                    }
                }
            }
        }

    }
}

function fetchXpaths(tagnam, element) {
    if (element.hasAttribute("id")) {
        element_getById(tagnam, element);
    } else if (element.hasAttribute("name")) {
        element_getByname(tagnam, element);

    } else if (element.hasAttribute("formcontrolname")) {
        element_getByformcontrolname(tagnam, element);

    } else if (element.hasAttribute("placeholder")) {
        element_getByplaceholder(tagnam, element);

    } else if (element.hasAttribute("value")) {
        element_getByvalue(tagnam, element);

    } else if (element.hasAttribute("role")) {
        element_getByrole(tagnam, element);

    } else if (element.hasAttribute("class") && tagnam != "button" && tagnam != "a") {
        element_getByclass(tagnam, element);
    }
    else if (tagnam == "button" || tagnam == "a" || tagnam == "input") {
        element_getBytext(tagnam, element);
    }
}

function element_getById(elementtype, elemt) {
    id = elemt.getAttribute("id");
    var xpat = "//" + elementtype + "[@id=\"" + id + "\"]";
    console.log(xpat);
    let r = Math.random().toString(36).substring(7);
    var el = "<div id="+r+"  style='border:none;resize:none;overflow:hidden;width: fit-content;color:green'>"+xpat+"</div>";
    elemt.insertAdjacentHTML("afterend", el);
    var div = document.getElementById(""+r+"");
    if(div){
    div.addEventListener("click", function(){       		
            console.log("inside copy function"+r );		
            var range = document.createRange();
            range.selectNode(document.getElementById(r)); 
            window.getSelection().removeAllRanges(); 
            window.getSelection().addRange(range); 
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            document.getElementById(r).style.backgroundColor='yellow';
            console.log("end of copy func");      
    });
} else {
    console.log("div is : "+div);
}
    
}

function element_getByname(elementtype, elemt) {
    nam = elemt.getAttribute("name");
    var xpat = "//" + elementtype + "[@name=\"" + nam + "\"]";
    console.log(xpat);
    let r = Math.random().toString(36).substring(7);
    var el = "<div id="+r+"  style='border:none;resize:none;overflow:hidden;width: fit-content;color:green'>"+xpat+"</div>";
    elemt.insertAdjacentHTML("afterend", el);
    var div = document.getElementById(""+r+"");
    if(div){
    div.addEventListener("click", function(){       		
            console.log("inside copy function"+r );		
            var range = document.createRange();
            range.selectNode(document.getElementById(r)); 
            window.getSelection().removeAllRanges(); 
            window.getSelection().addRange(range); 
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            document.getElementById(r).style.backgroundColor='yellow';
            console.log("end of copy func");      
    });
} else {
    console.log("div is : "+div);
}
    
}

function element_getByformcontrolname(elementtype, elemt) {
    fnam = elemt.getAttribute("formcontrolname");
    var xpat = "//" + elementtype + "[@formcontrolname=\"" + fnam + "\"]";
    console.log(xpat);
    let r = Math.random().toString(36).substring(7);
    var el = "<div id="+r+"  style='border:none;resize:none;overflow:hidden;width: fit-content;color:green'>"+xpat+"</div>";
    elemt.insertAdjacentHTML("afterend", el);
    var div = document.getElementById(""+r+"");
    if(div){
    div.addEventListener("click", function(){       		
            console.log("inside copy function"+r );		
            var range = document.createRange();
            range.selectNode(document.getElementById(r)); 
            window.getSelection().removeAllRanges(); 
            window.getSelection().addRange(range); 
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            document.getElementById(r).style.backgroundColor='yellow';
            console.log("end of copy func");      
    });
} else {
    console.log("div is : "+div);
}
    
}

function element_getByvalue(elementtype, elemt) {
    val = elemt.getAttribute("value");
    var xpat = "//" + elementtype + "[@value=\"" + val + "\"]";
    console.log(xpat);
    let r = Math.random().toString(36).substring(7);
    var el = "<div id="+r+"  style='border:none;resize:none;overflow:hidden;width: fit-content;color:green'>"+xpat+"</div>";
    elemt.insertAdjacentHTML("afterend", el);
    var div = document.getElementById(""+r+"");
    if(div){
    div.addEventListener("click", function(){       		
            console.log("inside copy function"+r );		
            var range = document.createRange();
            range.selectNode(document.getElementById(r)); 
            window.getSelection().removeAllRanges(); 
            window.getSelection().addRange(range); 
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            document.getElementById(r).style.backgroundColor='yellow';
            console.log("end of copy func");      
    });
} else {
    console.log("div is : "+div);
}
    
}

function element_getByrole(elementtype, elemt) {
    rol = elemt.getAttribute("role");
    var xpat = "//" + elementtype + "[@role=\"" + rol + "\"]";
    console.log(xpat);
    let r = Math.random().toString(36).substring(7);
    var el = "<div id="+r+"  style='border:none;resize:none;overflow:hidden;width: fit-content;color:green'>"+xpat+"</div>";
    elemt.insertAdjacentHTML("afterend", el);
    var div = document.getElementById(""+r+"");
    if(div){
    div.addEventListener("click", function(){       		
            console.log("inside copy function"+r );		
            var range = document.createRange();
            range.selectNode(document.getElementById(r)); 
            window.getSelection().removeAllRanges(); 
            window.getSelection().addRange(range); 
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            document.getElementById(r).style.backgroundColor='yellow';
            console.log("end of copy func");      
    });
} else {
    console.log("div is : "+div);
}
    
}

function element_getByplaceholder(elementtype, elemt) {
    ph = elemt.getAttribute("placeholder");
    var xpat = "//" + elementtype + "[@placeholder=\"" + ph + "\"]";
    console.log(xpat);
    let r = Math.random().toString(36).substring(7);
    var el = "<div id="+r+"  style='border:none;resize:none;overflow:hidden;width: fit-content;color:green'>"+xpat+"</div>";
    elemt.insertAdjacentHTML("afterend", el);
    var div = document.getElementById(""+r+"");
    if(div){
    div.addEventListener("click", function(){       		
            console.log("inside copy function"+r );		
            var range = document.createRange();
            range.selectNode(document.getElementById(r)); 
            window.getSelection().removeAllRanges(); 
            window.getSelection().addRange(range); 
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            document.getElementById(r).style.backgroundColor='yellow';
            console.log("end of copy func");      
    });
} else {
    console.log("div is : "+div);
}
    
}

function element_getByclass(elementtype, elemt) {
    cls = elemt.getAttribute("class");
    var xpat = "//" + elementtype + "[@class=\"" + cls + "\"]";
    console.log(xpat);
    let r = Math.random().toString(36).substring(7);
    var el = "<div id="+r+"  style='border:none;resize:none;overflow:hidden;width: fit-content;color:green'>"+xpat+"</div>";
    elemt.insertAdjacentHTML("afterend", el);
    var div = document.getElementById(""+r+"");
    if(div){
    div.addEventListener("click", function(){       		
            console.log("inside copy function"+r );		
            var range = document.createRange();
            range.selectNode(document.getElementById(r)); 
            window.getSelection().removeAllRanges(); 
            window.getSelection().addRange(range); 
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            document.getElementById(r).style.backgroundColor='yellow';
            console.log("end of copy func");      
    });
} else {
    console.log("div is : "+div);
}
    
}



function element_getBytext(elementtype, elemt) {
    itxt = elemt.innerText;
    if(itxt!=""){
        var xpat = "//" + elementtype + "[text()=\"" + itxt + "\"]";
        console.log(xpat);
        let r = Math.random().toString(36).substring(7);
        var el = "<div id="+r+"  style='border:none;resize:none;overflow:hidden;width: fit-content;color:green'>"+xpat+"</div>";
    elemt.insertAdjacentHTML("afterend", el);
    var div = document.getElementById(""+r+"");
    if(div){
    div.addEventListener("click", function(){       		
            console.log("inside copy function"+r );		
            var range = document.createRange();
            range.selectNode(document.getElementById(r)); 
            window.getSelection().removeAllRanges(); 
            window.getSelection().addRange(range); 
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            document.getElementById(r).style.backgroundColor='yellow';
            console.log("end of copy func");      
    });
} else {
    console.log("div is : "+div);
}
    
    }
}*/


function isVisible(el) {

          const style = window.getComputedStyle(el);

          return style.display !== "none" && style.visibility !== "hidden" && el.offsetParent !== null;

        }

        function normalizeText(el) {

          return el?.textContent?.trim()?.replace(/\s+/g, " ") || "";

        }

        function buildXPath(el) {
         const tag = el.tagName.toLowerCase();
         // 1. Attribute-based
         const attrs = ["id", "name", "placeholder", "data-test-id", "aria-label", "formcontrolname"];
         for (let attr of attrs) {
           if (el.hasAttribute(attr)) {
             const val = el.getAttribute(attr);
             if (val) return [`//${tag}[@${attr}="${val}"]`];
           }
         }
         // 2. Direct text
         const directText = normalizeText(el);
         if (directText) {
           return [`//${tag}[text()="${directText}"]`];
         }
         // 3. Look for nested tags with exact text
         const candidates = el.querySelectorAll("p, span, strong, label");
         for (let child of candidates) {
           const text = normalizeText(child);
           if (text) {
             const childTag = child.tagName.toLowerCase();
             return [`//${childTag}[text()="${text}"]/parent::${tag}`];
           }
         }
         // 4. Fallback: first class name
         const cls = el.className?.trim()?.split(/\s+/)[0];
         if (cls) {
           return [`//${tag}[contains(@class,"${cls}")]`];
         }
         return [];
        }

        function createXPathLabel(xpath) {

          const div = document.createElement("div");

          div.textContent = xpath;

          div.style.cssText = `

            display: inline-block;

            margin: 4px 0;

            padding: 4px 6px;

            max-width: 90%;

            font-size: 12px;

            font-family: monospace;

            background-color: #f1fdf2;

            color: #006400;

            border: 1px solid #b6e2c5;

            border-radius: 4px;

            word-break: break-word;

            overflow-wrap: anywhere;

            cursor: pointer;

          `;

          div.onclick = () => {

            const r = document.createRange();

            r.selectNode(div);

            window.getSelection().removeAllRanges();

            window.getSelection().addRange(r);

            document.execCommand("copy");

            window.getSelection().removeAllRanges();

            div.style.backgroundColor = "#ffe58f";

          };

          return div;

        }

        function insertXPathChips(el, xpathList) {

          xpathList.forEach((xp) => {

            const chip = createXPathLabel(xp);

            el.insertAdjacentElement("afterend", chip);

          });

        }

        function getInteractableSelector() {

          return `

            input:not([type="hidden"]),

            select,

            textarea,

            button,

            a[href],

            div[role="button"],

            div[contenteditable="true"]

          `;

        }

        function start() {

          document.querySelectorAll(getInteractableSelector()).forEach((el) => {

            if (!isVisible(el)) return;

            const tag = el.tagName.toLowerCase();

            // Handle nested elements like <button><p>Text</p></button>

            if (["div", "a", "button"].includes(tag)) {

              const innerText = normalizeText(el);

              if (innerText) {

                const xp = `//${tag}[.//text()[contains(.,"${innerText}")]]`;

                insertXPathChips(el, [xp]);

                return;

              }

            }

            const xpaths = buildXPath(el);

            if (xpaths.length > 0) {

              insertXPathChips(el, xpaths);

            }

          });

        }

        // Chrome extension compatibility (optional)

        if (window.chrome && chrome.runtime && chrome.runtime.onMessage) {

          chrome.runtime.onMessage.addListener((req, snd, resp) => {

            if (req.message === "start") start();

          });

        }




    