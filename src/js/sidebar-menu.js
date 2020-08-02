(function(){
    const openingBtn = document.querySelector(".sidebar__hamburger");
    const closingBtn = document.querySelector(".sidebar__close");
    const sidebar = document.querySelector(".sidebar");
    
    function openSidebar(e){
        e.preventDefault();
        sidebar.classList.add('sidebar--opened');
    }
    function closeSidebar(){
        sidebar.classList.remove('sidebar--opened');
    }
    
    openingBtn.addEventListener("click", openSidebar);
    closingBtn.addEventListener("click", closeSidebar);
}())
