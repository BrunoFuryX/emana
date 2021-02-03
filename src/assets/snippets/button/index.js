var controls = Array.from(document.querySelectorAll("[aria-controls]"));
var body = document.querySelector("body");

controls.forEach(control => {
    control.addEventListener("click", evt => {
        var currentTarget = evt.currentTarget;
        var id = `#${currentTarget.getAttribute("aria-controls")}`;

        if (id.indexOf("slick") === -1) {
            var el = document.querySelector(id);
            var currentHidden = el.getAttribute("aria-hidden");
            var hasFixed = el.getAttribute("data-fixed") == "false" ? false : true;

            if (currentHidden != "false" && currentHidden != "true")
                currentHidden = "true";
            if (hasFixed) {
                if (currentHidden === "true") body.classList.add("fixed");
                else body.classList.remove("fixed");
            }

            el.setAttribute("aria-hidden", currentHidden === "true" ? false : true);
        }
    });
});
