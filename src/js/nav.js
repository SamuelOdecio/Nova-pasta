import '@picocss/pico'
import '../css/global.css'
 const nav = /*html*/ ` <!-- html comentado para marcar o texto em html, usando extensao es6-string -->


<ul>
  <li><a class="contrast" href=" ./index.html">Desenvolvimento Web 1</a></li>
</ul>
<!-- Menu Principal-->
<ul>
  <li>
    <details role="list" dir="rtl">
      <summary role="link" class="contrast">Exercícios</summary> <!-- Texto menu Principal-->
      <ul role="listbox">
        <!-- Sub Menu-->
        <li><a class="primary" href="./login.html">Formulário de Acesso</a></li> <!-- Item do submenu-->
        <li><a class="primary" href="./lista-tarefas.html">Lista de tarefas</a></li> 
      </ul>
      <!-- fim do Sub Menu-->
    </details>
  </li>
</ul>
<!-- Fim do Menu Principal-->
`
const menu = document.querySelector("#menu")
menu.innerHTML = nav