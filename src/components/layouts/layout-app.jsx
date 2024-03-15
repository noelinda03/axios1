export default function LayoutApp ({children}) {
    return (
<>
<header>
    Este es un header
</header>
<main>
    {children}
</main>
<footer>
    Este es un footer
</footer>
</>
    )
    }