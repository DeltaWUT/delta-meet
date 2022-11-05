function select_tab(id: string) {
  // Remove selected class from all buttons
  document
    .querySelectorAll('.route')
    .forEach((item) => item.classList.remove('selected'));
  // select clicked element (visually)
  document
    .querySelectorAll('#' + id)
    .forEach((item) => item.classList.add('selected'));
}
function load_content(id: string) {
  fetch(`/src/page/${id == '' ? 'index' : id}.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('content')!.innerHTML = data;
    });
}
function push(event: Event) {
  // Get id attribute of the button or link clicked
  if (event.target instanceof Element) {
    let id = event.target.id;
    // Visually select the clicked button/tab/box
    select_tab(id);
    // Update Title in Window's Tab
    document.title = id;
    // Load content for this tab/page
    load_content(id);
    // Finally push state change to the address bar
    window.history.pushState({ id }, `${id}`, `/${id === 'index' ? '' : id}`);
  }
}
window.onload = () => {
  // original path
  let path = window.location.pathname;

  // fetch content for the original path
  fetch(`/src/page/${path == '/' ? 'index' : path}.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('content')!.innerHTML = data;
    });

  // Lister for clicks on section in nav in id='root'
  window['root' as any].addEventListener('click', (event: Event) => {
    if (event.target instanceof Element && event.target.tagName === 'SECTION') {
      push(event);
    }
  });
};

// Listen for PopStateEvent
// (Back or Forward buttons are clicked)
window.addEventListener('popstate', (event) => {
  // Grab the history state id
  let stateId = event.state.id;
  // Show clicked id in console (just for fun)
  console.log('stateId = ', stateId);
  // Visually select the clicked button/tab/box
  select_tab(stateId);
  // Load content for this tab/page
  load_content(stateId);
});

export {};
