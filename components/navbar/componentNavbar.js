class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="nav">
                <div class="nav-left">
                    <a href="../../index.html" class="logo">
                        <img class="logo-svg" src="../../assets/images/icon.svg" alt="icon">
                        <h3 class="logo-text">Kumovizija</h3>
                    </a>
                </div>
                <div class="nav-center">
                    <input type="text" onfocus="this.value=''" value="Search" id="search">
                    <img src="../../assets/images/search.jpg" alt="search">
                </div>
                <div class="nav-right">
                    <div class="menu">
                        <a href="pages/watchlist.html" class="watchlist-user">
                            <img clast="watchlist-icon" style="width: 20px; height: 20px;"
                                src="../../assets/images/plus.svg" alt="watchlist"> <span>Watch list</span></a>
                    </div>
                    <div class="user-name">
                        <h3 class="user-welcome">
                            <?php session_start();
                        $username=$_SESSION["username"];
                        echo " $username ";
                        ?>
                        </h3>
                    </div>
                </div>
            </nav>
        </header>
        `
    }
}

customElements.define(`app-navbar`, Navbar)