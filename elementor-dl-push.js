jQuery(document).ready(function($) {
    $(document).on('submit_success', function(event, form) {
        // Initialize an empty object for form data
        let formData = {};

        // Loop through each field in the form
        $(form).find('input, textarea, select').each(function() {
            let fieldName = $(this).attr('name'); // Get field name
            let fieldValue = $(this).val();       // Get field value

            // Add each field's name and value as individual attributes
            formData[fieldName] = fieldValue;
        });

        // Push the event and form data to the DataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'formSubmission',
            ...formData // Spread the formData object to include each field as separate attributes
        });
    });
});
