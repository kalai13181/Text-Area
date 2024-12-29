
        var textarea = document.getElementById("text-area");
        var result = document.getElementById("result")
        msg = document.getElementById("msg")
        var limit = 100;
        result.textContent = 0 + "/" + limit;

        textarea.addEventListener("input", function () {
            var charcount = textarea.value.length;
            result.textContent = charcount + "/" + limit;

            if (charcount == limit) {
                msg.textContent = " Oops.. You have reached the limit !";
                msg.style.color = "red";
            }
            else
            {
                msg.textContent = " ";
            }
        })


        