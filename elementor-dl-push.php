<?php
/**
 * Plugin Name: dataLayer Push For Elementor Forms.
 * Description: Pushes event with form field values to the dataLayer after successful Elementor Pro Form submission.
 * Version: 1.0
 * Author: WebTheory Media LLC
 */

// Enqueue your custom JavaScript
function my_custom_form_script() {
    wp_enqueue_script('custom-elementor-form', get_template_directory_uri() . '/js/custom-elementor-form.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'my_custom_form_script');
