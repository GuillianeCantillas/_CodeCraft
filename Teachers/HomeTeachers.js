function updateTable() {
    var select = document.getElementById("data-select");
    var selectedValue = select.value;
    var tableBody = document.getElementById("table-body");

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Data based on selected value
    switch (selectedValue) {
        case "data1":
            addTableRow("Level 1", "<span style='color: #1679AB;'> passcode </span> = <span style='color: #FF7F3E;'> new </span> File (<span style='color: #A2C579;'>\"C:\\dungeon\\LargeSteelDoor.txt\"</span>);<br>" + 
                            "&nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'> public void ________ (passcode) <span style='color: #FF7F3E;'> throws </span> IOException <br>", "open");
            addTableRow("Level 2", "<span style='color: #FF7F3E;'>public class </span> <span style='color: #1679AB;'>Chest</span> { <br>" +
                        "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>int</span> <span style='color: #1679AB;'>ChestNumber</span> = __;<br>" +
                        "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'> System.out.println(<span style='color: #1679AB;'>ChestNumber</span>); </span> <br> }<br>", "56");
            addTableRow("Level 3", "<span style='color: #FF7F3E;'>for (;;)</span> { <br>" +
                                "&nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Do you want to continue?<br>" +
                                "&nbsp; &nbsp; (Yes or No: )'</span>);</span> <br>" +
                            "&nbsp; &nbsp; <span style='color: #1679AB;'>yourAnswer</span> <span style='color: #FF7F3E;'>= scanner.nextLine().trim();</span> <br><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'Yes'</span>))</span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Well, go on then!'</span>);</span> <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ________ <span style='color: #FF7F3E;'>;</span> <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'>else if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'No'</span>))</span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'I'm sorry to hear that.'</span>);</span><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>break;</span><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'> else </span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'What would you like to do?'</span>);</span> <br>" +
                                "&nbsp; &nbsp;    } <br>" +
                            "}; <br><br></div>", "continue");
            addTableRow("Level 4", "<span style='color: #FF7F3E;'> public class </span> <span style='color: #1679AB;'>KeepWalking</span> { <br>" +
                                    "&nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>public static void main(String[] args)</span> { <br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'> int </span> <span style='color: #1679AB;'>steps </span> = 10; <br><br>" +
                                    
                                    "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>do</span> {<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #1679AB;'>steps++;</span><br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Keep walking!'</span>)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; } _____ <span style='color: #FF7F3E;'>(true)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Another room?'</span>)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; }<br>" +
                                    "}<br>", "while");
            addTableRow("Level 5", "<span style='color: #FF7F3E;'> int </span> <span style='color: #1679AB;'>i</span> = 0<span style='color: #FF7F3E;'>;</span><br>" +
                        "<span style='color: #FF7F3E;'> while(<span style='color: #1679AB;'>i</span> < 10)</span>  {<br>" +
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #FF7F3E;'>System.out.println(<span style='color: #1679AB;'>i</span>);</span><br>" +
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #1679AB;'>i++</span><span style='color: #FF7F3E;'>;</span><br>" + 
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #FF7F3E;'>if ( <span style='color: #1679AB;'>i</span> == 3 ) </span> {<br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; _____<span style='color: #FF7F3E;'>;</span> <br>" +
                            "&nbsp; &nbsp; &nbsp;  }<br>" +
                        "};<br>", "break");
            addTableRow("Level 6", "<span style='color: #FF7F3E;'>public class Main</span> { <br>" +
                                        "&nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>public static void main(String[] args)</span> { <br>" +
                                        "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;___ <span style='color: #FF7F3E;'>(int <span style='color: #1679AB;'>i = 1; i <= 5; i++</span>)</span> { <br>" +
                                        "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #1679AB;'>i</span>);</span> <br>" +
                                        "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <br>" +
                                        "&nbsp; &nbsp; &nbsp;   } <br>" +
                                    "};<br>", "for");
            addTableRow("Level 7", "<span style='color: #D284AC;'>In java, there is a technique that does the same. The only difference is that it calls itself to do it. What is this technique?</span> ", "recursion");
            addTableRow("Level 8", "<span style='color: #FF7F3E;'>import java.time.LocalDate;</span> <br><br>" +
        
                        "<span style='color: #FF7F3E;'>public class</span>  <span style='color: #1679AB;'>wine</span> {<br>" +
                        "&nbsp; &nbsp;   <span style='color: #FF7F3E;'>public static void main(String[] args)</span> {<br>" +
                        "&nbsp; &nbsp; &nbsp; &nbsp; _________<span style='color: #1679AB;'>date1040</span> = _________.<span style='color: #FF7F3E;'>of</span>(<span style='color: #1679AB;'>1040, 1, 1</span>);<br>" +
                        "&nbsp; &nbsp; &nbsp; &nbsp;    <span style='color: #FF7F3E;'>System.out.println</span>(<span style='color: #A2C579;'>'The code for the door is'</span> +  <span style='color: #1679AB;'>date1040</span>);<br>" +
                        "&nbsp; &nbsp;    }<br>" + 
                        "};", "LocalDate");
            break;

        case "data2":
            addTableRow("Level 1", "");
            addTableRow("Level 2", "");
            addTableRow("Level 3", "");
            addTableRow("Level 4", "");
            addTableRow("Level 5", "");

            break;
        case "data3":
            addTableRow("Level 1", "");
            addTableRow("Level 2", "");
            break;
        case "data4":
            addTableRow("Level 1", "");
            addTableRow("Level 2", "");
            break;
        default:
            // Show default message or handle empty state
            tableBody.innerHTML = "<tr><td colspan='3'>Please select a data set.</td></tr>";
            break;
    }
}

// Function to add rows to the table
function addTableRow(level, question, answer) {
    var tableBody = document.getElementById("table-body");
    var row = document.createElement("tr");
    row.innerHTML = "<td>" + level + "</td><td>" + question + "</td><td>" + answer + "</td>";
    tableBody.appendChild(row);
}

// Attach the updateTable function to the window object
window.updateTable = updateTable;
