import { ref, watch } from 'vue'

function useFavicon(newIcon) {
    const favicon = ref(newIcon)

    const updateIcon = (icon) => {
        document.head.querySelectorAll('link[rel*="icon"]')
            .forEach(el => el.href = `${icon}`)
    }

    const reset = () => favicon.value = '/favicon.ico'

    watch(favicon,
        (i) => {
            updateIcon(i)
        }, { immediate: true }
    );
    return { favicon, reset }
}

export default useFavicon;