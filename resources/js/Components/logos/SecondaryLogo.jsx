export default function SecondaryLogo({className = '', primary, tertiary}) {
    let color1
    let color2
    primary === true ? color1 = "white" : color1 = "#4E5764"
    tertiary === true ? color2 = "white" : color2 = "#EC2D23"

    return (
    <svg className={className} viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64.816 13.104C65.6053 13.104 66.416 13.296 67.248 13.68L61.776 30H58.48C56.7947 30 55.664 29.1573 55.088 27.472L50.48 13.68C51.44 13.296 52.2293 13.104 52.848 13.104C53.808 13.104 54.5547 13.3387 55.088 13.808C55.6427 14.256 56.0587 14.992 56.336 16.016L57.456 20.304C58.224 23.184 58.704 25.2853 58.896 26.608C59.1733 25.008 59.6427 22.9067 60.304 20.304L61.424 16.016C61.936 14.0747 63.0667 13.104 64.816 13.104ZM69.2548 9.136C69.2548 8.85867 69.3828 8.57067 69.6388 8.272L71.8788 5.904L74.2468 7.856C74.5028 8.09067 74.6308 8.35733 74.6308 8.656C74.6308 8.93333 74.5028 9.22133 74.2468 9.52L72.0068 11.888L69.6388 9.936C69.3828 9.72267 69.2548 9.456 69.2548 9.136ZM69.4468 13.2H74.4708V29.68C74.2148 29.808 73.8948 29.9147 73.5108 30C73.1268 30.064 72.7534 30.096 72.3908 30.096C71.4308 30.096 70.6948 29.8507 70.1828 29.36C69.6921 28.848 69.4468 28.1227 69.4468 27.184V13.2ZM77.4363 26.704C77.4363 25.616 78.0763 24.7733 79.3563 24.176C79.5483 24.9867 80.0389 25.6267 80.8283 26.096C81.6176 26.544 82.5349 26.768 83.5803 26.768C85.2443 26.768 86.0763 26.192 86.0763 25.04C86.0763 24.464 85.8736 24.08 85.4683 23.888C85.0843 23.6747 84.6256 23.536 84.0923 23.472C83.5589 23.3867 83.1963 23.3227 83.0043 23.28C81.4896 23.0453 80.1883 22.5867 79.1003 21.904C78.0336 21.2 77.5003 20.0053 77.5003 18.32C77.5003 16.656 78.1403 15.3333 79.4203 14.352C80.7216 13.3707 82.4923 12.88 84.7323 12.88C86.4389 12.88 87.8043 13.1787 88.8283 13.776C89.8736 14.352 90.3963 15.12 90.3963 16.08C90.3963 16.528 90.2363 16.944 89.9163 17.328C89.6176 17.712 89.1909 18.032 88.6363 18.288C88.2309 17.6267 87.6656 17.136 86.9403 16.816C86.2149 16.4747 85.3829 16.304 84.4443 16.304C83.7829 16.304 83.2709 16.432 82.9083 16.688C82.5456 16.944 82.3643 17.328 82.3643 17.84C82.3643 18.3307 82.5989 18.6827 83.0683 18.896C83.5376 19.1093 84.2843 19.3013 85.3083 19.472C86.4816 19.6853 87.4523 19.9307 88.2203 20.208C88.9883 20.464 89.6496 20.944 90.2043 21.648C90.7589 22.352 91.0363 23.344 91.0363 24.624C91.0363 26.416 90.3536 27.8133 88.9883 28.816C87.6443 29.8187 85.8523 30.32 83.6123 30.32C81.6496 30.32 80.1243 29.9893 79.0363 29.328C77.9696 28.6453 77.4363 27.7707 77.4363 26.704ZM93.8485 9.136C93.8485 8.85867 93.9765 8.57067 94.2325 8.272L96.4725 5.904L98.8405 7.856C99.0965 8.09067 99.2245 8.35733 99.2245 8.656C99.2245 8.93333 99.0965 9.22133 98.8405 9.52L96.6005 11.888L94.2325 9.936C93.9765 9.72267 93.8485 9.456 93.8485 9.136ZM94.0405 13.2H99.0645V29.68C98.8085 29.808 98.4885 29.9147 98.1045 30C97.7205 30.064 97.3472 30.096 96.9845 30.096C96.0245 30.096 95.2885 29.8507 94.7765 29.36C94.2858 28.848 94.0405 28.1227 94.0405 27.184V13.2ZM103.918 13.2V8.912C104.174 8.784 104.494 8.688 104.878 8.624C105.262 8.53867 105.635 8.496 105.998 8.496C106.937 8.496 107.651 8.752 108.142 9.264C108.654 9.75467 108.91 10.4693 108.91 11.408V13.2H113.166V16.816H108.942V24.784C108.942 25.7867 109.465 26.288 110.51 26.288C110.894 26.288 111.278 26.2133 111.662 26.064C112.046 25.8933 112.355 25.6907 112.59 25.456C112.675 25.584 112.793 25.776 112.942 26.032C113.113 26.2667 113.251 26.512 113.358 26.768C113.465 27.0027 113.518 27.2587 113.518 27.536C113.518 28.4107 113.134 29.0827 112.366 29.552C111.598 30 110.457 30.224 108.942 30.224C107.342 30.224 106.105 29.7867 105.23 28.912C104.377 28.016 103.95 26.736 103.95 25.072V16.816C103.182 16.7947 102.585 16.6773 102.158 16.464C101.753 16.2507 101.465 15.888 101.294 15.376C101.123 14.864 101.038 14.1387 101.038 13.2H103.918ZM124.01 30.32C122.303 30.32 120.789 29.9573 119.466 29.232C118.165 28.4853 117.151 27.4507 116.426 26.128C115.722 24.784 115.37 23.216 115.37 21.424C115.37 19.7173 115.701 18.224 116.362 16.944C117.045 15.6427 117.994 14.64 119.21 13.936C120.447 13.232 121.866 12.88 123.466 12.88C125.855 12.88 127.711 13.5733 129.034 14.96C130.357 16.3467 131.018 18.2027 131.018 20.528C131.018 20.6133 131.018 20.8693 131.018 21.296C131.018 21.7227 130.986 22.16 130.922 22.608H120.426C120.426 23.824 120.799 24.7733 121.546 25.456C122.314 26.1387 123.381 26.48 124.746 26.48C125.642 26.48 126.442 26.32 127.146 26C127.85 25.6587 128.415 25.168 128.842 24.528C129.354 24.6773 129.749 24.9333 130.026 25.296C130.325 25.6587 130.474 26.1067 130.474 26.64C130.474 27.792 129.887 28.6987 128.714 29.36C127.562 30 125.994 30.32 124.01 30.32ZM126.634 19.664C126.591 18.6827 126.314 17.9147 125.802 17.36C125.29 16.784 124.554 16.496 123.594 16.496C122.634 16.496 121.866 16.7733 121.29 17.328C120.735 17.8827 120.447 18.6613 120.426 19.664H126.634ZM133.76 6.48C134.016 6.352 134.336 6.256 134.72 6.192C135.104 6.10667 135.477 6.064 135.84 6.064C136.8 6.064 137.525 6.32 138.016 6.832C138.528 7.32267 138.784 8.03733 138.784 8.976V29.68C138.528 29.808 138.208 29.9147 137.824 30C137.44 30.064 137.067 30.096 136.704 30.096C135.744 30.096 135.008 29.8507 134.496 29.36C134.005 28.848 133.76 28.1227 133.76 27.184V6.48ZM144.883 30.096C143.902 30.096 143.113 29.808 142.515 29.232C141.939 28.6347 141.651 27.8453 141.651 26.864C141.651 25.904 141.939 25.136 142.515 24.56C143.113 23.9627 143.902 23.664 144.883 23.664C145.843 23.664 146.611 23.9627 147.187 24.56C147.785 25.136 148.083 25.904 148.083 26.864C148.083 27.8453 147.785 28.6347 147.187 29.232C146.611 29.808 145.843 30.096 144.883 30.096Z" fill={color1}/>
        <g clip-path="url(#clip0_2015_1558)">
        <path d="M39.7599 20.962C39.5081 22.5909 38.8791 24.1549 37.921 25.5343C36.9629 26.9135 35.7011 28.0715 34.2321 28.9197C32.7632 29.7678 31.126 30.2835 29.446 30.4273C27.766 30.5712 26.0876 30.3394 24.5394 29.7496C22.9911 29.1599 21.6141 28.2278 20.5136 27.0248C19.413 25.8218 18.6183 24.3797 18.1901 22.8089C17.7619 21.2382 17.7116 19.5803 18.0431 17.9623C18.3746 16.3444 19.0791 14.8091 20.1026 13.4741L23.2537 15.722C22.5986 16.5764 22.1477 17.559 21.9356 18.5945C21.7234 19.63 21.7556 20.691 22.0296 21.6963C22.3037 22.7016 22.8123 23.6245 23.5167 24.3944C24.221 25.1644 25.1023 25.7609 26.0932 26.1383C27.0841 26.5158 28.1582 26.6642 29.2334 26.5721C30.3086 26.48 31.3564 26.1499 32.2965 25.6072C33.2367 25.0644 34.0442 24.3233 34.6574 23.4405C35.2706 22.5578 35.6732 21.5568 35.8343 20.5143L39.7599 20.962Z" fill={color1}/>
        <path d="M37.1099 37.3872C33.4052 39.3146 29.204 40.0249 25.1133 39.4155C21.0224 38.8061 17.2539 36.9085 14.3518 33.9968L17.1422 31.2153C19.4646 33.5454 22.4804 35.064 25.7542 35.5517C29.0279 36.0393 32.3899 35.4709 35.3546 33.9285L37.1099 37.3872Z" fill={color2}/>
        <path d="M14.4183 34.0632L17.203 31.2785L5.56943 19.6449C4.03148 18.107 1.53796 18.107 0 19.6449L14.4183 34.0632Z" fill={color2}/>
        <path d="M36.4176 2.59593C32.7365 0.644768 28.5816 -0.112062 24.5533 0.434772C20.525 0.981609 16.8317 2.8038 14.007 5.63811L16.7974 8.41984C19.0579 6.15166 22.0134 4.69343 25.2371 4.25581C28.4609 3.8182 31.7858 4.42386 34.7317 5.9853L36.4176 2.59593Z" fill={color1}/>
        <path d="M14.0716 5.57324L16.8564 8.35806L5.60653 19.608C4.0685 21.146 1.57488 21.146 0.0368652 19.608L14.0716 5.57324Z" fill={color1}/>
        <path d="M29.1412 19.4999C27.0516 18.8275 24.5346 17.1031 23.255 15.7236C25.6174 12.866 29.2396 12.3067 32.0941 13.4891C33.6691 13.9818 36.5236 16.6718 35.8345 20.5148C33.9643 20.6133 31.8973 20.3867 29.1412 19.4999Z" fill={color2}/>
        </g>
        <defs>
            <clipPath id="clip0_2015_1558">
            <rect width="40" height="40" fill={color1}/>
            </clipPath>
        </defs>
    </svg>
    )
}