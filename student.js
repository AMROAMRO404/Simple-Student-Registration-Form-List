let students = [];

function showInput() {
    let name = document.getElementById("name");
    let id = document.getElementById("ID");
    let major = document.getElementById("major");
    let student = {
        "studentName": name.value,
        "studenID": id.value,
        "studenMajor": major.value
    }
    students.push(student);
    let i = 0;
    document.getElementById("display").innerHTML += "<li>" + "Name :" + name.value + "  id :" + id.value + " major :" + major.value + "</li>"
    document.getElementById("myTable").innerHTML += "<tr>" + "<td>" + name.value + "</td>" + "<td>" + id.value + "</td>" + "<td>" + major.value + "</td>" + "</tr>"
    i++;
    document.getElementById("name").value = "";
    document.getElementById("ID").value = "";
}
console.log("students.length");
console.log(students.length);
let searchName = document.getElementById("search");

function search() {
    document.getElementById("insearch").innerHTML = "";
    console.log("students.length");
    console.log(students.length);
    console.log(students);
    console.log(students[0].studentName);
    console.log(searchName.value);
    let reach = false;
    for (let i = 0; i < students.length; i++) {
        if (searchName.value === students[i].studentName) {
            console.log("yesss");
            document.getElementById("insearch").innerHTML += "Name :" + students[i].studentName + "  id :" + students[i].studenID + " major :" + students[i].studenMajor;
            reach = true;
        }
    }
    if (reach === false) {
        document.getElementById("insearch").innerHTML = "No result !!! ";
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
    document.getElementById("my-table-is-sorted").innerHTML = "";
    students.sort((a, b) => (a.studentName > b.studentName) ? 1 : -1);
    for (let i = 0; i < students.length; i++) {
        document.getElementById("my-table-is-sorted").innerHTML += "<tr>" + "<td>" + students[i].studentName + "</td>" + "<td>" + students[i].studenID + "</td>" + "<td>" + students[i].studenMajor + "</td>" + "</tr>";
    }
}

function sortMeInReverse() {
    document.getElementById("my-table-is-sorted-reverse").innerHTML = "";
    students.sort((a, b) => (a.studentName < b.studentName) ? 1 : -1);
    for (let i = 0; i < students.length; i++) {
        document.getElementById("my-table-is-sorted-reverse").innerHTML += "<tr>" + "<td>" + students[i].studentName + "</td>" + "<td>" + students[i].studenID + "</td>" + "<td>" + students[i].studenMajor + "</td>" + "</tr>";
    }
}