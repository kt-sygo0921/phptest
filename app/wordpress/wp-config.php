<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.sourceforge.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意: 
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.sourceforge.jp/Codex:%E8%AB%87%E8%A9%B1%E5%AE%A4 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'wp');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'kato');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', 'kato1841');

/** MySQL のホスト名 */
define('DB_HOST', 'localhost');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8mb4');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'z,>}F$.]u3Q}B[^?)O@/cd~r&*Vf8EOy73Ah[ SlB.;Qt%-Pb4w&F:bI2W^&!=|,');
define('SECURE_AUTH_KEY',  '<z;ST.qgDu}qe8,WA5L>6I$pz6(sh]|3~|<e!a^GI,D{+SW`jPeI[f8v4e(Ud`Mb');
define('LOGGED_IN_KEY',    'y6Zd/$h;NKv-fUp]O4,<3BXlcv_B)_+Vg/o4cb%6,,[&:ycd<?jNUXK5z;StclBK');
define('NONCE_KEY',        'GCGLWj@hl#GU#53Vj:rG/Y7m`u8#N::udEJI,%@yY/%X58H3 I:=kr)iBQnO0.HS');
define('AUTH_SALT',        'uDOxp=S7zkbG9)ub}WVHUu@F@X[-rc67M38-HY-EQAG+Pw-s:H.=A`]J-#l}tZM)');
define('SECURE_AUTH_SALT', '>h=%K?,jkx[cg{s=GX`H$Q*uWhS<?^Jrd:N i4P)lfd#>FPBz)UBWBmBci.lP>It');
define('LOGGED_IN_SALT',   'Mr|N[H1gMlsEJSWb!j:AI(,$~Sp!q96GVP@U0{VUOo36bU],<qk%i)]=X2=_]k, ');
define('NONCE_SALT',       'iFd^w4u8PFnoIX&M,F+dHtWoOSCCGbM~reNoribA,k}CB`TM]-,R<h0<[vsBmRK$');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
