'use client'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = function (props:any) {

    const [menuState, setMenuState] = useState<boolean>(false);
    const handleMenuState = () => {
        setMenuState(!menuState);
    }

    const pathname = usePathname();

    return (
        <header className='mx-24 sm:mx-2'>
            <div className="flex justify-between items-center my-10 md:my-5">
                <div className="flex gap-6 sm:hidden md:hidden">
                    <a href="https://twitter.com/?lang=en" target="_blank">
                        <svg className="social-media-icons" width="20" height="36" viewBox="0 0 20 36" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.9297 14.4375C17.9297 14.6328 17.9297 14.7891 17.9297 14.9844C17.9297 20.4141 13.8281 26.625 6.28906 26.625C3.94531 26.625 1.79688 25.9609 0 24.7891C0.3125 24.8281 0.625 24.8672 0.976562 24.8672C2.89062 24.8672 4.64844 24.2031 6.05469 23.1094C4.25781 23.0703 2.73438 21.8984 2.22656 20.2578C2.5 20.2969 2.73438 20.3359 3.00781 20.3359C3.35938 20.3359 3.75 20.2578 4.0625 20.1797C2.1875 19.7891 0.78125 18.1484 0.78125 16.1562V16.1172C1.32812 16.4297 1.99219 16.5859 2.65625 16.625C1.52344 15.8828 0.820312 14.6328 0.820312 13.2266C0.820312 12.4453 1.01562 11.7422 1.36719 11.1562C3.39844 13.6172 6.44531 15.2578 9.84375 15.4531C9.76562 15.1406 9.72656 14.8281 9.72656 14.5156C9.72656 12.25 11.5625 10.4141 13.8281 10.4141C15 10.4141 16.0547 10.8828 16.8359 11.7031C17.7344 11.5078 18.6328 11.1562 19.4141 10.6875C19.1016 11.6641 18.4766 12.4453 17.6172 12.9531C18.4375 12.875 19.2578 12.6406 19.9609 12.3281C19.4141 13.1484 18.7109 13.8516 17.9297 14.4375Z"
                                fill="#9B9B9B" />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/login/" target="_blank">
                        <svg className="social-media-icons" width="13" height="36" viewBox="0 0 13 36" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8984 19.75H7.96875V28.5H4.0625V19.75H0.859375V16.1562H4.0625V13.3828C4.0625 10.2578 5.9375 8.5 8.78906 8.5C10.1562 8.5 11.6016 8.77344 11.6016 8.77344V11.8594H10C8.4375 11.8594 7.96875 12.7969 7.96875 13.8125V16.1562H11.4453L10.8984 19.75Z"
                                fill="#9B9B9B" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/accounts/login/" target="_blank"><svg className="social-media-icons"
                        width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.25 14.0078C11.7109 14.0078 13.7422 16.0391 13.7422 18.5C13.7422 21 11.7109 22.9922 9.25 22.9922C6.75 22.9922 4.75781 21 4.75781 18.5C4.75781 16.0391 6.75 14.0078 9.25 14.0078ZM9.25 21.4297C10.8516 21.4297 12.1406 20.1406 12.1406 18.5C12.1406 16.8984 10.8516 15.6094 9.25 15.6094C7.60938 15.6094 6.32031 16.8984 6.32031 18.5C6.32031 20.1406 7.64844 21.4297 9.25 21.4297ZM14.9531 13.8516C14.9531 14.4375 14.4844 14.9062 13.8984 14.9062C13.3125 14.9062 12.8438 14.4375 12.8438 13.8516C12.8438 13.2656 13.3125 12.7969 13.8984 12.7969C14.4844 12.7969 14.9531 13.2656 14.9531 13.8516ZM17.9219 14.9062C18 16.3516 18 20.6875 17.9219 22.1328C17.8438 23.5391 17.5312 24.75 16.5156 25.8047C15.5 26.8203 14.25 27.1328 12.8438 27.2109C11.3984 27.2891 7.0625 27.2891 5.61719 27.2109C4.21094 27.1328 3 26.8203 1.94531 25.8047C0.929688 24.75 0.617188 23.5391 0.539062 22.1328C0.460938 20.6875 0.460938 16.3516 0.539062 14.9062C0.617188 13.5 0.929688 12.25 1.94531 11.2344C3 10.2188 4.21094 9.90625 5.61719 9.82812C7.0625 9.75 11.3984 9.75 12.8438 9.82812C14.25 9.90625 15.5 10.2188 16.5156 11.2344C17.5312 12.25 17.8438 13.5 17.9219 14.9062ZM16.0469 23.6562C16.5156 22.5234 16.3984 19.7891 16.3984 18.5C16.3984 17.25 16.5156 14.5156 16.0469 13.3438C15.7344 12.6016 15.1484 11.9766 14.4062 11.7031C13.2344 11.2344 10.5 11.3516 9.25 11.3516C7.96094 11.3516 5.22656 11.2344 4.09375 11.7031C3.3125 12.0156 2.72656 12.6016 2.41406 13.3438C1.94531 14.5156 2.0625 17.25 2.0625 18.5C2.0625 19.7891 1.94531 22.5234 2.41406 23.6562C2.72656 24.4375 3.3125 25.0234 4.09375 25.3359C5.22656 25.8047 7.96094 25.6875 9.25 25.6875C10.5 25.6875 13.2344 25.8047 14.4062 25.3359C15.1484 25.0234 15.7734 24.4375 16.0469 23.6562Z"
                            fill="#9B9B9B" />
                    </svg>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank"><svg className="social-media-icons" width="23"
                        height="36" viewBox="0 0 23 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.4453 13.3828C21.9141 15.0234 21.9141 18.5391 21.9141 18.5391C21.9141 18.5391 21.9141 22.0156 21.4453 23.6953C21.2109 24.6328 20.4688 25.3359 19.5703 25.5703C17.8906 26 11.25 26 11.25 26C11.25 26 4.57031 26 2.89062 25.5703C1.99219 25.3359 1.25 24.6328 1.01562 23.6953C0.546875 22.0156 0.546875 18.5391 0.546875 18.5391C0.546875 18.5391 0.546875 15.0234 1.01562 13.3828C1.25 12.4453 1.99219 11.7031 2.89062 11.4688C4.57031 11 11.25 11 11.25 11C11.25 11 17.8906 11 19.5703 11.4688C20.4688 11.7031 21.2109 12.4453 21.4453 13.3828ZM9.0625 21.7031L14.6094 18.5391L9.0625 15.375V21.7031Z"
                            fill="#9B9B9B" />
                    </svg>
                    </a>
                </div>
                <p className="flex font-bold text-sm sm:hidden md:hidden">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_10313_2653)">
                            <g clip-path="url(#clip1_10313_2653)">
                                <g clip-path="url(#clip2_10313_2653)">
                                    <path
                                        d="M17.5898 9.69995C17.5898 8.66895 17.4063 7.68045 17.0698 6.76595C16.8398 9.46045 15.4033 10.8444 13.9023 10.1999C12.4963 9.59595 13.4438 7.24145 13.5138 6.11795C13.6318 4.21345 13.5078 2.03345 10.0483 0.220947C11.4858 2.97095 10.2148 4.67945 8.88184 4.78345C7.40284 4.89895 6.04834 3.51245 6.54834 1.26245C4.92934 2.45545 4.88234 4.46345 5.38184 5.76245C5.90284 7.11645 5.36084 8.24145 4.09034 8.36645C2.67034 8.50645 1.88134 6.84595 2.60884 4.19995C1.34984 5.68245 0.589844 7.60245 0.589844 9.69995C0.589844 14.3944 4.39534 18.1999 9.08984 18.1999C13.7843 18.1999 17.5898 14.3944 17.5898 9.69995Z"
                                        fill="#F4900C" />
                                    <path
                                        d="M14.2868 12.1994C14.3608 13.7414 13.0063 14.3459 12.2773 14.0539C11.2243 13.6324 11.5068 12.9084 11.2358 11.4084C10.9648 9.90845 9.92334 8.86695 8.38184 8.40845C9.50684 11.5749 7.75834 12.7419 6.84184 12.9504C5.90584 13.1634 4.96534 12.9499 4.85784 10.9469C3.76584 12.0339 3.08984 13.5379 3.08984 15.1999C3.08984 15.3839 3.10134 15.5649 3.11734 15.7449C4.65234 17.2619 6.76084 18.1999 9.08984 18.1999C11.4188 18.1999 13.5273 17.2619 15.0623 15.7449C15.0783 15.5649 15.0898 15.3839 15.0898 15.1999C15.0898 14.1064 14.7978 13.0819 14.2868 12.1994Z"
                                        fill="#FFCC4D" />
                                </g>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_10313_2653">
                                <rect width="18" height="18" fill="white" transform="translate(0.0898438 0.199951)" />
                            </clipPath>
                            <clipPath id="clip1_10313_2653">
                                <rect width="18" height="18" fill="white" transform="translate(0.0898438 0.199951)" />
                            </clipPath>
                            <clipPath id="clip2_10313_2653">
                                <rect width="18" height="18" fill="white" transform="translate(0.0898438 0.199951)" />
                            </clipPath>
                        </defs>
                    </svg>
                    Free shipping on all U.S. orders $50+
                </p>
                <div className="flex justify-center flex-wrap gap-1 md:hidden sm:hidden">
                    <button className="rounded-xl px-4 py-1 bg-white border bo font-bold text-sm"><Link href='/login'>Login</Link></button>
                    <button className="rounded-xl px-4 py-1 bg-black text-white font-bold text-sm"><Link href='/register'>Sign Up</Link></button>
                </div>
                <svg className='hidden md:block sm:block' width="180" height="48" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="180" height="48" fill="url(#pattern0)"></rect>
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_10313_2691" transform="scale(0.00555556 0.0208333)"></use>
                        </pattern>
                        <image id="image0_10313_2691" width="180" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAwCAYAAAC47FD8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA/qSURBVHgB7VsJfBTVGf/e7ObmCqjgAYZLUUlAKEWiKMgp1YoHKIoVrQdeCMrdn+0ilEQ8W0QFzyrVCsUDT0IsUaCoVZSAoDZFpFwiEEhCEpLdff3+mVl4OzuzuwlJtD/e//f72MybN29m3vy/8z2INDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NOKCoJ8Q3VeMb+EPpCaVlZYf2nLZY/tJQ+MoUS+EPiNvUudEr6dvIEBthZQnCiFaSBFMqrmBNCr4p5gouJu8tCVYaXwvEmWKCNCNkqiHENSSf0v4SV4IeEof3Nj/iTLS0KgjvFQPSBSe+2RAXmfgoEZFJBM5pCvS+uVjP//rkUEK1BzyCfmVlHKdINGVG6Z5q5p9yGf+QRoadcRRE/qMtyZ1ljI4hER8xp67GeZfcsL6QXMew1/d8qf3l8FAPpO9O0UndAa6U91QyPId/fzQgaUfSx+WdJYgyxaWZSyfsGiPVQscNaG9ycZd/HMC1RJsw3cf/ttfnUQeprqU1TEuy2Z5icWg2uM+lln080EKy2yWMSwtHM5PZNnIMpflOZZYc6NBdSPGYZy1bMrVbJdvpDrA8AcqQn8LQ3SD7faT8S0dG2jF8hbLeHImMwCXdxbLk2SSOoU0YiIuC93ltWmtEtOqKy8f3KSioICMA8HqkwN+/3ie8nFUR6WQHqPk8N/CuIzH2pLsNwrp2MADLANsbUg2ysn8JklKO4h9K5nEH0VHkhINB8QmtM9nJDat4HjOOG7J8ortHBgkc+upTONWdBSQhgcfj7rmT8ySQdmLx537+dDZO2NctollOoVXZ45nuZmlqdL2Cpkxs4qfS7J5EstIW9v3ZIYYX5NJZoRWk1jaKn1GkPleb5KGK2ISulufgyM43u2BkIBJdyrVEyrXFtWEHIb03Mv0LDWCxuI4LvvCEhVdWK6hcEIvYnmD4gMIlEpm8lXXODU0BpT0UIy+CCPUZ0X9fRiZ8XIIn7MsYVnK0tNqgye8iOInNJ4H37eU6mbVYTSaWX+XUN09QzNrLDxHkGoPvDfmq4qlIp7OrsDChzSM31G8JYwo4NkoYsV4nOvUv+fb3m5kt/9P5rIpFwlJw7l0l/fl/qKPqXGAdzmNBRWWzWQSeR9LJctWlkfIrDzEAixtLksRmUTeZ/1ijKetezjN2/G2Y1z3X4d+O1guZdnD8leWc1jGKud/S2YVJCRXWvd82boW73WA5SDLapYrKHZ4CO97PctK67r9loCMa1hGU+xYPtm6V5517QHrF8+ziuUmCldoJ6Rb7/ov6zpcH5pjGKp+5LKGEpWo3fKnjJaypqpw1OBxSoxgYva6oTO/shpEVv6UD/gR+npJZq0dNGcT1Q2w0CtY2ihtl5G7hcaHn2vrbwcqMD4yEzInYPwnYozxI8tMawy/0j6U5T3luMoa712XcU5k2UWRFtLH8gfl+HWW/uSeZML7gGQgyjaH8xksr7GgdOrGCzwDPMctVLNY5jjGfJZBMcaAB4JCOuVMZ7AsZOlB7oDx+QsLG1vaq55w1djMt6ems+W8l+oJbOObBY3qeWcu8iXWjP/BFA4TxLn8fs+sHTjna2ocIA59nqITEUAZ8mEyyWfHYDKtYKwxYIn/RGYipwKhhRqWYD4QG/+Z5WyWBFt/5BXxuPvh5E5mssb9FcurFGlljyOTzLh/NCOHczAIudZzq0C8/w6Z8xNrjF+w/J0oIoRtTaZiRiMzAC8ApbLnU+6ENpIkZ9aiO9UjhJAXJKRXzOiyYmoGryTCcm3wSLZiolEy9yyWR1maKG2wFGPItGx3kpmchYCPjmfMUNrgDUDSZKUNVgZutB+Z1Ygi5ZywxjhZaYN1fJ7CgTgT9fy1ZFp2hBgX0ZEYNh6EPiy8wQYyy4J4P3tekE2RngfvfrZyDIX7G5nJ9gRrPBUo1arc8Fj9z7T1g/UsINMzbKdwxezM8hQdUQzMN3Kf05U+uGYqy0AyjZGa2ON9b2e5XL2hI6FrYmdzoHoHj3tnYrWEy23KTzT9i8FzdlDDAy8PwqjEQkwIIsN1FbDMI9OClSp92pFpkUJAdaKLcgwFuIDlWRYs2y8g06pvVvqksdytHCMxgqtcRs5oTmaSC2sHQt5P8RMbrhiKAAv3a5beLOwF6VNbv0sp3AoutgTvDgVAWALP8gyZucbFLP9W+iPZ7KkcX0LmSqcKJLRQEszxEJZMa7yAdR7kbs/S0jrGc/dVrsdzgKwocXJoWmPR7aEZDAuULjXU4EjoQCAFWtmcGgZNmF5dvMKYX12csoIaB0jgetvaQGRYokRF8NFeUfpgfi4kUyEw8ZfaxsBkl9vGQIJnj9/Ptx0jubmKzLDGrSqCe3Yic4UT89SeogMEgdLm0xGrDPIgsRptu08Lqy0E5DUg8C9ZppE5NyoQw9tzHDW5HUXhrh8KfQeFJ7vFVhsUv9C6f7Y1NjDCNgaM3pcUPrdQ2BcpHAhxskIHEWU77M0QwcDYeihsOIOzw0Rvwps9mrW7a8GqnQFqHCBW62Rre8qSeK4FmZF52/eRPGFJLJxC5uqgmsAg+0fteQaZ8S+qC7ByqQ7Xw5ouZ+lK5kd1AkKdJS7noKiwmCOUNigZvn8oYcW3wEotklR4iF4sHcn0SBkUyZWQMUy0+qoA6ZwSTyjaMOtXLeHBA9krS/AwsUqgAIiabH+ow0hIEbcymWu9NyNeJHoSvmmffModHZu06ZZ9vsw5/c3JsUo49QHEzXVdOkYyhQkDqT1UNyREuT/cPCpJIbeMOBwu1k5ckOsWcgfKeweinLfHwfY5Qfz7PpnWE1UGhEkINWAIoq1XtKDId9sQpT9Iaq9HQ4lrky+4IozQXd+d1JGX8EZTA4HDjNL2acffdOEJHarf21X4clmg8p7EFON2anjUpaAfAuqgIJef6g58RDvZQJQhyjEsJFz1Aqsdsac9vxhA7gDpoimcvSqB+4XmBdYaoQDKbWku17vNoaTIKkxtN73Vm6cOI3QlVW4ThsCS63dcsnOsPEhBW6W5a61WlQmPMCovOP60a09o3m7Twm1rFu+rLkOW6+XKR27XvKljqWGB0leJrQ3JW9M45DwyQwUnC9gvzjGQucMSg3BwubDA35CZTDqV//CBsdA039Z+ErkDCpLucg5uub+tDbErFBXeB4tJxynn8Kyw0jA2SHoRL7/mMvYeS1QMJHegZHcShcfLiK9/tPXLofjmFrIqdFEYoYuGzT20bkDOSzJZcAYrbmPKcpZ9ZEsnUzwoAuKG4uKq2fw4X1Kc8AhxqGNq6/GPZI15Z92uwsdLqyvCkiSD5MOZy6fcTA0HrN5ttLXBnWI1rMwmmCAsT1dYx+VWf5B5jW2Maxyuh8AaIt6tso5DS7awXC+QmWhi7lF1QbnLaWUSH7y1rW0fuQNkvtPlHGLwc2xtUKqAdW+1ZAdDNYblOjLLex+RSTi31VP0X2trw9xmOvSF8qLSge0LD1p9QnH8alvfUdY5+9zC24UqLKG2w97Tscqxvm9u8frBD8xvmZByDgWDQ7ETzuwtn1k3OGfFtpGPVgSFmElxgC1z1WlNThy3uM/dT/f78P7cUn/FFfY+EiNHutf6BCzOqxTuVVA7vo3CXTGWjt8mc+kXeybUD33AOqeOcQOZiZ0aQyKJQmmpgMxa8HnKOXyMhykcsICIXa9WxgmVo+xbc2PtRpxMZrk1VKFC+HC9Nb76raEYoT0hbWznoISf2cZFRcZeY1aBRSE1JMGYUNSBytjwUqi/g8TI0bBoB6UKbcBCmVL9f6UZZK7oqp4DcfZDZNajV1vPFRZKxSxldF4+tUMKyU38GdfurxLDtl6ce3jJs1ve5NVSiGy3a72Gp7J707a3tTOMRSvKd80qPlQ+waXry/7ilBs2jvRVUe0R79I3Pi4qBfZ6KTR8i3Uek6vGfwhVUO4LlZ9AOBBhkG2Mg7Yx1Fi23HrG0Bj4KO87PAcAZSmxxrHHoSAhSPWDdeyj8KVv+zhQYiR+hsM5bPt93DoG0Tba+mEh5EHrGVB7/w1FxuczrGcIAauHUygSCGuqrWdR+QYFmENmWTJkYUFW++o0rv2OTG+CilOqbQwYpsMLVTH3MicbEhrvlV5jpkrmmtGEmOd2XaLhqejZPGPCs73GvphftiOHyTzeuafYXtXMGFdHMtcGIB0UarOtHRON8AB1XpVEmEBMtlpLRegAi2z3JiAgwpQMCv/w+FB/tI0BwsKyFFAk8MGbUySZoRTwJj9QfAjtlHMiM1Yh1XIl3sXu7lHbhfKjFgwvFE91BzV5LH7YEzx4m6YUaTxhZUFgNdnGfOdRuBdEhQieE3s87CVNeN2FakNUQmeydRZB7JwSK0tFUsR+Yo83hV2riJjkBOHd3bVZuysH9bz56ewPZzxU4j90Kzl7g/1CBK/7unfOXmocYFcaar5IuKIltUiYkKg+53AObh/VhjUxxoDywxjkOJwDweFFEKPG2rKK+P9aMpeFowGKWhTlfIX1LLBoKolgyUHaaP/fEp7qeYoOvC82HCGkimacQHgsXiFG3uvwjKiVo9ITrQYNq4+5g5KHzV/UkCNr2eRpZIjZbIoHFA7Jddwgn5U3+UmuW1tVCimTjaRVPVp1GlUdLPV+deCHueX+qktcht8tDRqxfsADH9HRAdqPUqO6solwI9qGJ7w3loSxrI2sG8kXrCAWFpDNI54roejAGFhZu8r6RVyIiQapYNmWUPQkLgQsuEDJUHWBJUqzrltnjYNncfq4PgoPOZDpIxRCLI6kDGEOLD2W5xGSvUBHVuWcAOsHxcH3QsXEsN4FIRYImG6dV++3ymUsVDGgsLD0qGbBwmOhBVYf3wYVnlhVsgwyvyu+E0INYY2BuBvKvdnpIldCj1g0wvNteoc1kmTblqs/bVvgK3Csw2bmTxvOieMSHshompDy1OkJZ09OTtzW4rOynUsrA9Uum5tEIQW9wwuHzIpmFTSiw0eRhEaCeTQ19/97uIYcRS3atw5K2VGQ8YYbmbPy8Z9kg7lew/C3SW0+Ka0qbWJ1yo5en5buXOlMZlkhhHF/AsnzNZk1GgKuKzrBYFK68FS1ZAsdVirq5+vn3dund7YQnKFKrgBI+iSjedPMbmmdtqwMFs3cULx1XEAGk8NHE9u5hP26V1LOF4NyGmN3ncYxCldC88JelSQjECR5Mjb7UxKlG4J67QvKCQL1WSGqhJTzqhNSZgVKpXz34PqlhwJVg6Rl9SUCfik3CJILKS1t6fpzfbtJQ6OB4UroMn/l1tSE1I0GiYmUJG+SJLy8Gt6Ko+4KKeRiSYE5V65ussHn8wWT8qYP8MtAEhN9IS+db5Qy8E8RkN9cPrjJHp/wHdMxnUbjImqVo9PHdzVLLU25R0iRxazcIQV9VF5cvGzzyAUHSOOnBqo76kYi5Dl7SENDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0OjwfA/Vj9+al47lgMAAAAASUVORK5CYII="></image>
                    </defs>
                </svg>
                <span className="cursor-pointer hidden md:block sm:block" onClick={() => handleMenuState()} >
                    <MenuIcon />
                </span>
                <div className={`md:block fixed sm:block top-0 ${menuState ? 'right-[0%]' : 'right-[-50%]'} hidden backdrop:blur-[7.5] ease-linear duration-300 w-[45%] sm:w-[45%] h-full z-10 bg-[#96DED1] text-black`}>
                    <span className="m-5 flex justify-end cursor-pointer" onClick={() => handleMenuState()}>
                        <CloseIcon/>
                    </span>
                    <ul>  
                        <li className='p-4 cursor-pointer'><Link className={pathname === '/home' ? 'text-primary-color font-bold' : 'hover:text-primary-color sm:text-sm font-bold'} href="/home">HOME</Link></li>
                        <li className='p-4 cursor-pointer'><Link className={pathname === '/services' ? 'text-primary-color sm:text-sm font-bold' : 'hover:text-primary-color sm:text-sm font-bold'} href="/services">TEESPACE</Link></li>
                        <li className='p-4 cursor-pointer'><Link className={pathname === '/shop' ? 'text-primary-color sm:text-sm font-bold' : 'hover:text-primary-color sm:text-sm font-bold'} href="/shop">SHOP</Link></li>
                        <li className='p-4 cursor-pointer'><Link className={pathname === '/blog' ? 'text-primary-color sm:text-sm font-bold' : 'hover:text-primary-color sm:text-sm font-bold'} href="/blog">BLOG</Link></li>
                        <li className='p-4 cursor-pointer'><Link className={pathname === '/print' ? 'text-primary-color sm:text-sm font-bold' : 'hover:text-primary-color sm:text-sm font-bold'} href="/print">PAGES</Link></li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-between items-center mx-auto my-5 sm:my-2 flex-wrap md:hidden sm:hidden">
                <nav>
                    <ul className="flex gap-6 sm:gap-2 *:font-bold">
                        <li><Link className={pathname === '/home' ? 'text-primary-color sm:text-sm' : 'hover:text-primary-color sm:text-sm'} href="/home">HOME</Link></li>
                        <li><Link className={pathname === '/services' ? 'text-primary-color sm:text-sm' : 'hover:text-primary-color sm:text-sm'} href="/services">TEESPACE</Link></li>
                        <li><Link className={pathname === '/shop' ? 'text-primary-color sm:text-sm' : 'hover:text-primary-color sm:text-sm'} href="/shop">SHOP</Link></li>
                        <li><Link className={pathname === '/blog' ? 'text-primary-color sm:text-sm' : 'hover:text-primary-color sm:text-sm'} href="/blog">BLOG</Link></li>
                        <li><Link className={pathname === '/print' ? 'text-primary-color sm:text-sm' : 'hover:text-primary-color sm:text-sm'} href="/print">PAGES</Link></li>
                    </ul>
                </nav>
                <div className='flex gap-1 items-center'>
                    <img className='w-7 h-6' src="./Icons/greenTshirt.png" alt="" />
                    <p className='text-2xl font-bold'>TeeSpace</p>
                </div>
                <span className="flex items-center gap-1">
                    <svg width="18" height="17" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.1875 2.125C6.36719 2.125 5.59896 2.28125 4.88281 2.59375C4.15365 2.90625 3.52214 3.32943 2.98828 3.86328C2.45443 4.39714 2.03125 5.02865 1.71875 5.75781C1.40625 6.47396 1.25 7.24219 1.25 8.0625C1.25 8.88281 1.40625 9.65104 1.71875 10.3672C2.03125 11.0964 2.45443 11.7279 2.98828 12.2617C3.52214 12.7956 4.15365 13.2188 4.88281 13.5312C5.59896 13.8438 6.36719 14 7.1875 14C8.00781 14 8.77604 13.8438 9.49219 13.5312C10.2214 13.2188 10.8529 12.7956 11.3867 12.2617C11.9206 11.7279 12.3438 11.0964 12.6562 10.3672C12.9688 9.65104 13.125 8.88281 13.125 8.0625C13.125 7.24219 12.9688 6.47396 12.6562 5.75781C12.3438 5.02865 11.9206 4.39714 11.3867 3.86328C10.8529 3.32943 10.2214 2.90625 9.49219 2.59375C8.77604 2.28125 8.00781 2.125 7.1875 2.125ZM0 8.0625C0 7.07292 0.188802 6.14193 0.566406 5.26953C0.94401 4.39714 1.45833 3.63542 2.10938 2.98438C2.76042 2.33333 3.52214 1.81901 4.39453 1.44141C5.26693 1.0638 6.19792 0.875 7.1875 0.875C8.17708 0.875 9.10807 1.0638 9.98047 1.44141C10.8529 1.81901 11.6146 2.33333 12.2656 2.98438C12.9167 3.63542 13.431 4.39714 13.8086 5.26953C14.1862 6.14193 14.375 7.07292 14.375 8.0625C14.375 9.05208 14.1862 9.98307 13.8086 10.8555C13.431 11.7279 12.9167 12.4896 12.2656 13.1406C11.6146 13.7917 10.8529 14.306 9.98047 14.6836C9.10807 15.0612 8.17708 15.25 7.1875 15.25C6.19792 15.25 5.26693 15.0612 4.39453 14.6836C3.52214 14.306 2.76042 13.7917 2.10938 13.1406C1.45833 12.4896 0.94401 11.7279 0.566406 10.8555C0.188802 9.98307 0 9.05208 0 8.0625ZM11.3867 12.2617C11.5039 12.1445 11.6504 12.0859 11.8262 12.0859C12.002 12.0859 12.1484 12.1445 12.2656 12.2617L16.0742 16.0508C16.1914 16.181 16.25 16.3307 16.25 16.5C16.25 16.6693 16.1914 16.819 16.0742 16.9492C15.944 17.0664 15.7943 17.125 15.625 17.125C15.4557 17.125 15.306 17.0664 15.1758 16.9492L11.3867 13.1406C11.2695 13.0234 11.2109 12.877 11.2109 12.7012C11.2109 12.5254 11.2695 12.3789 11.3867 12.2617Z"
                            fill="black" />
                    </svg>
                    <input className="p-2 rounded-xl" type="search" placeholder="Search..." />
                    <a href="#"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_10313_2699)">
                            <path
                                d="M8.03703 1.48428C8.14119 1.40615 8.25513 1.34756 8.37882 1.3085C8.50252 1.26943 8.62947 1.2499 8.75968 1.2499C8.88989 1.2499 9.01684 1.26943 9.14054 1.3085C9.26424 1.34756 9.37817 1.40615 9.48234 1.48428C9.59953 1.54938 9.69718 1.63402 9.77531 1.73818C9.85343 1.84235 9.91203 1.95303 9.95109 2.07022L11.6698 6.38662C11.6698 6.39964 11.6698 6.40615 11.6698 6.40615C11.6698 6.40615 11.6698 6.40941 11.6698 6.41592C11.6698 6.42243 11.6763 6.42568 11.6894 6.42568L16.2987 6.71865C16.8977 6.75772 17.2818 7.06045 17.4511 7.62686C17.6204 8.19326 17.4836 8.65876 17.0409 9.02334L13.5058 11.9726C13.5058 11.9726 13.5025 11.9758 13.496 11.9823C13.4895 11.9888 13.4862 11.9921 13.4862 11.9921C13.4862 11.9921 13.4862 11.9953 13.4862 12.0019C13.4862 12.0084 13.4862 12.0116 13.4862 12.0116L14.6386 16.5038C14.7688 17.0507 14.606 17.5064 14.1503 17.871C13.6946 18.2356 13.2128 18.2551 12.705 17.9296L8.75968 15.4296L5.08781 17.7538C4.52791 18.1054 3.99731 18.0793 3.49601 17.6757C2.99471 17.272 2.82218 16.7707 2.97843 16.1718L4.03312 12.0116C4.03312 12.0116 4.03312 12.0084 4.03312 12.0019C4.03312 11.9953 4.03312 11.9921 4.03312 11.9921C4.03312 11.9921 4.02986 11.9888 4.02335 11.9823C4.01684 11.9758 4.01359 11.9726 4.01359 11.9726L0.478433 9.02334C0.0357242 8.65876 -0.100995 8.19326 0.0682763 7.62686C0.237547 7.06045 0.621662 6.75772 1.22062 6.71865L5.82999 6.42568C5.84302 6.42568 5.84953 6.42243 5.84953 6.41592C5.84953 6.40941 5.84953 6.40615 5.84953 6.40615C5.84953 6.40615 5.84953 6.39964 5.84953 6.38662L7.56828 2.07022C7.60734 1.95303 7.66593 1.84235 7.74406 1.73818C7.82218 1.63402 7.91984 1.54938 8.03703 1.48428ZM9.44328 14.3749L13.3691 16.8749C13.3821 16.8749 13.3886 16.8749 13.3886 16.8749C13.3886 16.8749 13.3951 16.8749 13.4081 16.8749C13.4081 16.8619 13.4114 16.8554 13.4179 16.8554C13.4244 16.8554 13.4277 16.8489 13.4277 16.8358C13.4277 16.8358 13.4277 16.8326 13.4277 16.8261C13.4277 16.8196 13.4277 16.8163 13.4277 16.8163L12.2753 12.3241C12.2493 12.2069 12.2395 12.0865 12.246 11.9628C12.2525 11.8391 12.2753 11.7187 12.3144 11.6015C12.3404 11.4843 12.3892 11.3736 12.4609 11.2694C12.5325 11.1653 12.6138 11.0741 12.705 10.996L16.2402 8.06631C16.2402 8.05329 16.2434 8.04678 16.2499 8.04678C16.2564 8.04678 16.2597 8.04678 16.2597 8.04678C16.2597 8.04678 16.2597 8.04027 16.2597 8.02725C16.2597 8.02725 16.2597 8.02399 16.2597 8.01748C16.2597 8.01097 16.2597 8.0012 16.2597 7.98818C16.2597 7.98818 16.2564 7.98493 16.2499 7.97842C16.2434 7.97191 16.2402 7.96865 16.2402 7.96865C16.2402 7.96865 16.2336 7.96865 16.2206 7.96865L11.6308 7.67568C11.6308 7.67568 11.6275 7.67568 11.621 7.67568C11.6145 7.67568 11.6112 7.67568 11.6112 7.67568C11.4941 7.66266 11.3769 7.63662 11.2597 7.59756C11.1425 7.5585 11.0383 7.4999 10.9472 7.42178C10.843 7.34365 10.7551 7.25902 10.6835 7.16787C10.6119 7.07673 10.55 6.97256 10.498 6.85537L8.77921 2.51943C8.77921 2.50641 8.77921 2.4999 8.77921 2.4999C8.77921 2.4999 8.77596 2.4999 8.76945 2.4999C8.76294 2.4999 8.75968 2.4999 8.75968 2.4999C8.75968 2.4999 8.75643 2.4999 8.74992 2.4999C8.74341 2.4999 8.74015 2.4999 8.74015 2.4999C8.74015 2.4999 8.74015 2.50641 8.74015 2.51943L7.0214 6.85537C6.96932 6.97256 6.90747 7.07673 6.83585 7.16787C6.76424 7.25902 6.67635 7.34365 6.57218 7.42178C6.48104 7.4999 6.37687 7.5585 6.25968 7.59756C6.14249 7.63662 6.02531 7.66266 5.90812 7.67568L1.29874 7.96865C1.28572 7.96865 1.27921 7.96865 1.27921 7.96865C1.27921 7.96865 1.27596 7.97191 1.26945 7.97842C1.26294 7.98493 1.25968 7.98818 1.25968 7.98818C1.25968 8.0012 1.25968 8.01097 1.25968 8.01748C1.25968 8.02399 1.25968 8.02725 1.25968 8.02725C1.25968 8.04027 1.25968 8.04678 1.25968 8.04678C1.25968 8.04678 1.26294 8.04678 1.26945 8.04678C1.27596 8.04678 1.27921 8.05329 1.27921 8.06631L4.81437 10.996C4.90552 11.0741 4.9869 11.1653 5.05851 11.2694C5.13013 11.3736 5.17895 11.4843 5.20499 11.6015C5.24406 11.7187 5.26684 11.8391 5.27335 11.9628C5.27986 12.0865 5.2701 12.2069 5.24406 12.3241L4.18937 16.4843C4.17635 16.5233 4.17635 16.5624 4.18937 16.6015C4.20239 16.6405 4.22192 16.6666 4.24796 16.6796C4.26098 16.6926 4.27401 16.7024 4.28703 16.7089C4.30005 16.7154 4.31307 16.7187 4.32609 16.7187C4.33911 16.7187 4.35213 16.7187 4.36515 16.7187C4.37817 16.7187 4.3977 16.7121 4.42375 16.6991L8.07609 14.3749C8.18025 14.3098 8.29093 14.261 8.40812 14.2284C8.52531 14.1959 8.6425 14.1796 8.75968 14.1796C8.87687 14.1796 8.99406 14.1959 9.11125 14.2284C9.22843 14.261 9.33911 14.3098 9.44328 14.3749Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_10313_2699">
                                <rect width="20" height="20" fill="white" transform="matrix(1 0 0 -1 0 20)" />
                            </clipPath>
                        </defs>
                    </svg>
                    </a>
                    <span id="cart-badge" className='bg-primary-color text-white text-xs rounded-xl relative top-[-13px] left-[-15px] text-center w-[18px] h-[18px]'>0</span>
                    <Link href="/cart">
                        <svg  width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.37305 5H14.9902C15.1465 5 15.2962 5.02604 15.4395 5.07812C15.5827 5.13021 15.7129 5.20833 15.8301 5.3125C15.9473 5.41667 16.0417 5.53711 16.1133 5.67383C16.1849 5.81055 16.2272 5.95052 16.2402 6.09375C16.2402 6.10677 16.2402 6.11328 16.2402 6.11328L17.3535 16.1133C17.3665 16.2044 17.3665 16.2923 17.3535 16.377C17.3405 16.4616 17.321 16.543 17.2949 16.6211C17.2689 16.7122 17.2363 16.7936 17.1973 16.8652C17.1582 16.9368 17.1061 17.0052 17.041 17.0703C16.9889 17.1484 16.9271 17.2135 16.8555 17.2656C16.7839 17.3177 16.709 17.3568 16.6309 17.3828C16.5397 17.4219 16.4518 17.4512 16.3672 17.4707C16.2826 17.4902 16.2012 17.5 16.123 17.5H1.24023C1.16211 17.5 1.08073 17.4902 0.996094 17.4707C0.911458 17.4512 0.823568 17.4219 0.732422 17.3828C0.654297 17.3568 0.579427 17.3177 0.507812 17.2656C0.436198 17.2135 0.374349 17.1484 0.322266 17.0703C0.257161 17.0052 0.205078 16.9368 0.166016 16.8652C0.126953 16.7936 0.094401 16.7122 0.0683594 16.6211C0.0423177 16.543 0.0227865 16.4616 0.00976562 16.377C-0.00325521 16.2923 -0.00325521 16.2044 0.00976562 16.1133L1.12305 6.11328C1.12305 6.11328 1.12305 6.10677 1.12305 6.09375C1.13607 5.95052 1.17839 5.81055 1.25 5.67383C1.32161 5.53711 1.41602 5.41667 1.5332 5.3125C1.65039 5.20833 1.7806 5.13021 1.92383 5.07812C2.06706 5.02604 2.2168 5 2.37305 5ZM14.9902 6.25H2.37305L1.25977 16.25H16.1035L14.9902 6.25ZM8.68164 3.125C8.35612 3.125 8.03711 3.18685 7.72461 3.31055C7.41211 3.43425 7.13867 3.61328 6.9043 3.84766C6.66992 4.08203 6.49089 4.35547 6.36719 4.66797C6.24349 4.98047 6.18164 5.29948 6.18164 5.625V8.125C6.18164 8.29427 6.11979 8.44075 5.99609 8.56445C5.8724 8.68815 5.72591 8.75 5.55664 8.75C5.38737 8.75 5.24089 8.68815 5.11719 8.56445C4.99349 8.44075 4.93164 8.29427 4.93164 8.125V5.625C4.93164 5.13021 5.02604 4.65169 5.21484 4.18945C5.40365 3.72721 5.67383 3.32031 6.02539 2.96875C6.37695 2.61719 6.78385 2.347 7.24609 2.1582C7.70833 1.9694 8.18685 1.875 8.68164 1.875C9.17643 1.875 9.65495 1.9694 10.1172 2.1582C10.5794 2.347 10.9863 2.61719 11.3379 2.96875C11.6895 3.32031 11.9596 3.72721 12.1484 4.18945C12.3372 4.65169 12.4316 5.13021 12.4316 5.625V8.125C12.4316 8.29427 12.3698 8.44075 12.2461 8.56445C12.1224 8.68815 11.9759 8.75 11.8066 8.75C11.6374 8.75 11.4909 8.68815 11.3672 8.56445C11.2435 8.44075 11.1816 8.29427 11.1816 8.125V5.625C11.1816 5.29948 11.1198 4.98047 10.9961 4.66797C10.8724 4.35547 10.6934 4.08203 10.459 3.84766C10.2246 3.61328 9.95117 3.43425 9.63867 3.31055C9.32617 3.18685 9.00716 3.125 8.68164 3.125Z"
                            fill="black" />
                    </svg>
                    </Link>
                    <span id="cart-badge1112" className='bg-primary-color text-white text-xs rounded-xl relative top-[-13px] left-[-15px] text-center w-[18px] h-[18px] '>0</span>
                </span>
            </div>
        </header>
    )
}

export default Header;