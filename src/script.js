function show() {
    var tampil = document.getElementById('tampil');
    var hilang = document.getElementById('hilang');
    var inputpass = document.getElementById('Password');

    hilang.classList.toggle('flex');
    hilang.classList.toggle('hidden');
    tampil.classList.toggle('flex');
    tampil.classList.toggle('hidden');
    var confirm = hilang.classList.contains('flex');
    if (confirm == true)
    {
        inputpass.removeAttribute("type");
        inputpass.setAttribute('type','password');
    }
    else if(confirm == false)
    {
        inputpass.removeAttribute("type");
        inputpass.setAttribute('type','text');
    }
}
