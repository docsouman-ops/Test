/* ==========================================================================
   FORM VALIDATION MODULE
   ========================================================================== */
jQuery(document).ready(function ($) {
  
  /**
   * Helper to restrict inputs to matched key/input patterns
   */
  function allowOnly(pattern, selector) {
    $(document).on("keydown", selector, function (e) {
      var key = e.key;
      if (key.length > 1 || pattern.test(key)) {
        return;
      }
      e.preventDefault();
    });

    $(document).on("input", selector, function () {
      var value = $(this).val();
      var filtered = value.split('').filter(function (char) {
        return pattern.test(char);
      }).join('');

      if (value !== filtered) {
        $(this).val(filtered);
      }
    });
  }

  // Name input validation rules (letters, spaces, dots, hyphens, apostrophes)
  allowOnly(/^[a-zA-Z\s\.\'\-]$/, ".validate-name, input[name='full_name'], input[name='name']");

  // Phone/digits input validation rules
  allowOnly(/^[0-9]$/, ".validate-phone, input[type='tel'], input[name='phone'], input[name='mobile']");

  // Validation for general text-field Name
  $(document).on('input', '.text-field', function () {
    const value = $(this).val();
    const regex = /^[A-Za-z\s\-']*$/;
    if (!regex.test(value)) {
      $(this).val(value.replace(/[^A-Za-z\s\-']/g, ''));
    }
  });

  // Validation for number only field
  $(document).on('input', '.number-only', function () {
    const value = $(this).val();
    $(this).val(value.replace(/[^0-9]/g, ''));
  });

  // ==========================================================================
  // Mandatory Fields & Validation Messages Below Each Field
  // ==========================================================================
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setFieldError($field, message) {
    $field.addClass('is-invalid');
    const $error = $field.siblings('.mn-form__error');
    if ($error.length) {
      $error.text(message).addClass('is-visible');
    }
  }

  function clearFieldError($field) {
    $field.removeClass('is-invalid');
    const $error = $field.siblings('.mn-form__error');
    if ($error.length) {
      $error.text('').removeClass('is-visible');
    }
  }

  function validateField($field) {
    const name = $field.attr('name');
    const val = $.trim($field.val());

    if (name === 'full_name') {
      if (!val) {
        setFieldError($field, 'Please enter your full name');
        return false;
      }
      clearFieldError($field);
      return true;
    }

    if (name === 'company') {
      if (!val) {
        setFieldError($field, 'Please enter your company');
        return false;
      }
      clearFieldError($field);
      return true;
    }

    if (name === 'work_email') {
      if (!val) {
        setFieldError($field, 'Please enter your work email');
        return false;
      }
      if (!emailRegex.test(val)) {
        setFieldError($field, 'Please enter a valid email address');
        return false;
      }
      clearFieldError($field);
      return true;
    }

    return true;
  }

  // Clear errors as soon as the user types a valid value
  $(document).on('input', '.mn-form input[name="full_name"], .mn-form input[name="company"], .mn-form input[name="work_email"]', function () {
    if ($(this).hasClass('is-invalid')) {
      validateField($(this));
    }
  });

  // Validate on blur
  $(document).on('blur', '.mn-form input[name="full_name"], .mn-form input[name="company"], .mn-form input[name="work_email"]', function () {
    validateField($(this));
  });

  // Form submit handler with custom inline validation
  $(document).on('submit', '.mn-form', function (e) {
    let isFormValid = true;
    let $firstInvalid = null;

    const $mandatoryFields = $(this).find('input[name="full_name"], input[name="company"], input[name="work_email"]');
    $mandatoryFields.each(function () {
      const ok = validateField($(this));
      if (!ok && isFormValid) {
        isFormValid = false;
        $firstInvalid = $(this);
      }
    });

    if (!isFormValid) {
      e.preventDefault();
      e.stopImmediatePropagation();
      if ($firstInvalid) {
        $firstInvalid.focus();
      }
      return false;
    }
  });

  // Reset errors when the form is cleared/reset
  $(document).on('reset', '.mn-form', function () {
    $(this).find('.is-invalid').removeClass('is-invalid');
    $(this).find('.mn-form__error').text('').removeClass('is-visible');
  });

});
