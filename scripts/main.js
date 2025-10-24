 // Expandable text functionality
 function toggleText(fieldId) {
    const shortText = document.getElementById(fieldId + '-short');
    const fullText = document.getElementById(fieldId + '-full');
    const button = document.querySelector(`#${fieldId}-item .expand-btn`);
    
    if (shortText.classList.contains('hidden')) {
        // Currently expanded, collapse it
        shortText.classList.remove('hidden');
        fullText.classList.add('hidden');
        button.textContent = 'Show more';
    } else {
        // Currently collapsed, expand it
        shortText.classList.add('hidden');
        fullText.classList.remove('hidden');
        button.textContent = 'Show less';
    }
}