let students = [];

function showInput() {
    let name = document.getElementById("name");
    let id = document.getElementById("ID");
    let major = document.getElementById("major");
    if (name.value && id.value && major.value) {
        let student = {
            "studentName": name.value,
            "studenID": id.value,
            "studenMajor": major.value
        }
        students.push(student);
        let i = 0;
        document.getElementById("myTable").innerHTML += "<tr>" + "<td>" + name.value + "</td>" + "<td>" + id.value + "</td>" + "<td>" + major.value + "</td>" + "</tr>"
        i++;
        document.getElementById("name").value = "";
        document.getElementById("ID").value = "";
    } else {
        alert("Please fill all the fields")
    }

}
let searchName = document.getElementById("search");

function search() {
    if (students.length != 0) {
        let reach = false;
        for (let i = 0; i < students.length; i++) {
            if (searchName.value === students[i].studentName) {
                document.getElementById("insearch").innerHTML += "Name :" + students[i].studentName + "  id :" + students[i].studenID + " major :" + students[i].studenMajor;
                reach = true;
            }
        }
        if (reach === false) {
            alert("No result !!")
        }
    } else {
        alert("No students !!")
    }

}
//Reference : https://www.w3schools.com/howto/howto_js_filter_table.asp
function dynamicnSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function sortMe() {
    if (students.length != 0) {
        document.getElementById("my-table-is-sorted").innerHTML =
            `
        <table class="table table-striped table-hover" id="my-table-is-sorted-reverse">
            <tr class="header">
                <th style="width:33%;">Name</th>
                <th style="width:33%;">ID</th>
                <th style="width:33%;">Major</th>
            </tr>
        </table>
        `;
        students.sort((a, b) => (a.studentName > b.studentName) ? 1 : -1);
        for (let i = 0; i < students.length; i++) {
            document.getElementById("my-table-is-sorted").innerHTML += "<tr>" + "<td>" + students[i].studentName + "</td>" + "<td>" + students[i].studenID + "</td>" + "<td>" + students[i].studenMajor + "</td>" + "</tr>";
        }
    } else {
        alert("No students !!")
    }
}

function sortMeInReverse() {
    if (students.length != 0) {
        document.getElementById("my-table-is-sorted-reverse").innerHTML =
            `
        <table class="table table-striped table-hover" id="my-table-is-sorted-reverse">
            <tr class="header">
                <th style="width:33%;">Name</th>
                <th style="width:33%;">ID</th>
                <th style="width:33%;">Major</th>
            </tr>
        </table>
        `;
        students.sort((a, b) => (a.studentName < b.studentName) ? 1 : -1);
        for (let i = 0; i < students.length; i++) {
            document.getElementById("my-table-is-sorted-reverse").innerHTML += "<tr>" + "<td>" + students[i].studentName + "</td>" + "<td>" + students[i].studenID + "</td>" + "<td>" + students[i].studenMajor + "</td>" + "</tr>";

        }
    } else {
        alert("No students !!")
    }

}