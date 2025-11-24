🧱 Structure SCSS trouvée
src/
├── styles/
│ ├── \_utils.scss
│ ├── \_theme.scss
│ ├── \_variables.scss
│ ├── \_reset.scss
│ └── styles.scss ← (fichier principal qui importe tout)

1️⃣ \_variables.scss — 💡 Les constantes globales
Ici, tu définis toutes tes valeurs réutilisables :
➡️ Ces variables seront utilisées dans tous les autres fichiers (\_theme.scss, \_utils.scss, etc.)
:root {
--font-family: 'Montserrat', sans-serif;
--text-color: #222;
--gray-100: #dfe6e9;
--gray-700: #2c3a47;
--light: #e9d5ff;
--primary: #7e22ce;
--dark: #3b0764;
--success: #22c55e;
--danger: #dc2626;
--border: 1px solid var(--gray-100);
--radius: 24px;
}

2️⃣ \_theme.scss — 🎨 Thème de l’application
C’est ici que tu appliques tes couleurs, polices et styles de base à l’ensemble du site.
C’est ton “design system global”, celui qui donne l’identité visuelle à ton app.
body {
font-family: $font-family-base;
font-size: $font-size-base;
background-color: $background-color;
color: $secondary-color;
}

a {
color: $primary-color;
text-decoration: none;

&:hover {
text-decoration: underline;
}
}

3️⃣ \_reset.scss — 🧼 Nettoyage du style par défaut des navigateurs
Les navigateurs appliquent par défaut des marges/paddings sur certains éléments (<h1>, <ul>, etc.).
Le “reset” permet d’uniformiser tout ça :
💡 Certains projets utilisent normalize.css ou modern-css-reset à la place, mais ce fichier fait souvent le même travail.
/_ Exemple simple de reset _/
_,
_::before,
\*::after {
box-sizing: border-box;
margin: 0;
padding: 0;
}

html, body {
height: 100%;
}

4️⃣ \_utils.scss — 🧩 Classes utilitaires réutilisables
Ce fichier sert à créer des helpers CSS rapides, un peu comme Tailwind, mais faits maison.
.flex {
display: flex;
}
.flex-center {
display: flex;
justify-content: center;
align-items: center;
}
.m-auto {
margin: auto;
}
.text-center {
text-align: center;
}

➡️ Tu peux ensuite les utiliser dans ton HTML :

<div class="flex-center">Contenu centré</div>

5️⃣ styles.scss — 📦 Le point d’entrée Angular de ton application
C’est le fichier qui est référencé dans angular.json et chargé globalement :
@use 'styles/reset';
@use 'styles/variables';
@use 'styles/theme';
@use 'styles/utils';
