<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'wordpress' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'secret_password_42' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'mysql' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '~Gm}!ml,UARia@j +KJyY@1n1a<r??Oww.wpJpr@!]%;#C:~_V@fCyd{VvqX{XiQ');
define('SECURE_AUTH_KEY',  't.4XZaU+yt{idg{~1}5P.Zn _,O8nU8P~5sTv*L&}U2M[cA,$>MaGpn_Z6IWMT f');
define('LOGGED_IN_KEY',    '6PhyrmxR$H9j[dD<Qiztj*K^t>OncGe6$Ch-G}(QSI=2V:]eX6lEh.`z,8@wkW?1');
define('NONCE_KEY',        'Hwdqh$:&;[b@wxJ|przee3`Jr]QNNRoq?qc>y4eHl=cfb+u)#X*U=o?@c$|^W+-Q');
define('AUTH_SALT',        '%[@:-Vay0o2+]6M:0_5|=8aVk],1z5)sB>^pZU+?WV.@)lU^LSeYb-9pNOwh9Q3@');
define('SECURE_AUTH_SALT', '{,6)dIf{IwTm5Av^DafvgdTK? (oLew_INj;+%r3dWs^VZ*A|~|7]v.l$vb3@N@s');
define('LOGGED_IN_SALT',   '1|^GZX.Ev_QfWD{pWuP-?o2q+WT-3Q@?;Y0-j[(@zKYA<))_--hHv25-C17)6=Lq');
define('NONCE_SALT',       '{^%V=1Au>j+SO86,D:2])u?(mmV[N-* Age([_O.tzp5GHYOCU)} #lk:R$Hm!7C');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/** Dynamic home **/
define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST']);
define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST']);


/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
