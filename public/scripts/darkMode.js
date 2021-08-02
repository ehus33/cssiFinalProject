
function darkModeChange() {
  if (document.documentElement.classList.contains('dark')) {
    darkModeClassToggle()
  }
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",
  e => e.matches && darkModeChange()
)

document.getElementById('darkModeToggle').addEventListener('click', darkModeClassToggle)

function darkModeClassToggle() {
    document.documentElement.classList.toggle('dark')
    if (document.cookie.split(';').some((item) => item.trim().startsWith('colorToggle='))) {
      var cookieValue = document.cookie.split('; ').find(row => row.startsWith('colorToggle=')).split('=')[1];
      document.cookie = 'colorToggle=' + (cookieValue == 1 ? 0 : 1) + '; Path=/;'
    } else {
      document.cookie = 'colorToggle=1; Path=/;'
    }
    toggleThemeColorMeta()
} 

function toggleThemeColorMeta() {
    if (document.cookie.split(';').some((item) => item.includes('colorToggle=1'))) {
      document.querySelector('meta[media="(prefers-color-scheme: dark)"]').setAttribute("content", '#F2F2F2')
      document.querySelector('meta[media="(prefers-color-scheme: light)"]').setAttribute("content", '#1A1A1A')
    } else {
      document.querySelector('meta[media="(prefers-color-scheme: dark)"]').setAttribute("content", '#1A1A1A')
      document.querySelector('meta[media="(prefers-color-scheme: light)"]').setAttribute("content", '#F2F2F2')
    }
}