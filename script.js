
// ======================================
// RESUME POPUP FUNCTIONALITY
// ======================================

// Get the Resume button and popup
const resumeOpen = document.getElementById("resume-open");
const resumeDialog = document.getElementById("resume-dialog");

// Make sure both elements exist
if (resumeOpen && resumeDialog) {

  // Open the resume in a popup
  resumeOpen.addEventListener("click", () => {
    resumeDialog.showModal();
  });

  // Close when clicking outside the PDF viewer
  resumeDialog.addEventListener("click", (event) => {
    if (event.target === resumeDialog) {
      resumeDialog.close();
    }
  });

}

// The dialog also supports:
// - Closing with the X button
// - Closing with the Escape key
