<?php 
/**
 * Plugin Name: My Gutenberg Blocks
 * Description: Mi plugin con bloques
 * Version: 1.0
 * Author: Monica Artavia
 */

 if(! defined('ABSPATH')){
    exit;
 }

 require_once plugin_dir_path( __FILE__).'includes/register-blocks.php';