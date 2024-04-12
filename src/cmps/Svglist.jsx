

export function HeartSvg({ label, type }) {
    return (
        <svg aria-label={label} className={type} fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
            <title>{label}</title>
            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
        </svg>
    )
}

export function CommentSvg({ label, type }) {
    return (
        <svg
            aria-label={label}
            className={type}
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
        >
            <title>{label}</title>
            <path
                d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>

    )
}

export function ShareSvg({ label, type }) {
    return (
        <svg
            aria-label={label}
            className={type}
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
        >
            <title>{label}</title>
            <line
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
            ></line>
            <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
            ></polygon>
        </svg>

    )
}

export function SaveSvg({ label, type }) {
    return (
        <svg
            aria-label={label}
            className={type}
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
        >
            <title>{label}</title>
            <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            ></polygon>
        </svg>

    )
}

export function XSVG({ label, type }) {
    return (
        <svg
            aria-label={label}
            className={type}
            fill="currentColor"
            height="18"
            role="img"
            viewBox="0 0 24 24"
            width="18"
        >
            <title>{type}</title>
            <polyline
                fill="none"
                points="20.643 3.357 12 12 3.353 20.647"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
            ></polyline>
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                x1="20.649"
                x2="3.354"
                y1="20.649"
                y2="3.354"
            ></line>
        </svg>

    )
}

export function ThreeDotsSVG({ label, type }) {
    return (
        <svg
            aria-label={label}
            className={type}
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24">
            <title>{type}</title>
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
        </svg>
    )
}

export function MessagesSVG({ label, type }) {
    return (
        <svg
            aria-label={label}
            className={type}
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24">
            <title>{type} </title>
            <path d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.739"></path>
            <path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z" fillRule="evenodd"></path>
        </svg>

    )
}

export function HomeSVG({ label, type }) {
    return (
        <svg
            aria-label={label}
            className={type}
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24">
            <title>{type}</title>
            <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path>
        </svg>
    )
}

export function ExploreSVG({ label, type }) {
    return (
        <svg
            aria-label={label}
            className={type}
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24">
            <title>{type}</title>
            <polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
            <polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon>
            <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
        </svg>
    )
}

export function EmojiSVG({ label, type })
{
    return(
        <svg
         aria-label={label}
         className={type} 
         fill="currentColor" 
         height="13" 
         role="img" 
         viewBox="0 0 24 24" 
         width="13">
            <title>{label}</title>
            <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
            </svg>
    )
}