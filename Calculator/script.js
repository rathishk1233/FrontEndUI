 function disp(val)
        {
            document.getElementById("result").value+=val;
        }

         function solve()
        {
            let data = document.getElementById("result").value;
            let res = eval(data);
            document.getElementById("result").value = res;
        }

        function clr()
        {
            document.getElementById("result").value = " ";
        }