body.theme-dark {
    --text-accent: #006f8b;
    --text-accent-hover: #0084a5;
    --interactive-accent: #006f8b;
    --h1-color: var(--interactive-accent);
}
body.theme-light {
    --text-accent: #004d61;
    --text-accent-hover: #006f8b;
    --interactive-accent: #004d61;
    --h1-color: var(--interactive-accent);
}

body {
    --graph-main: var(--text-accent-hover);
    --graph-muted: rgba(126, 126, 126, 0.5);

    .timestamps {
        display: flex;
        flex-direction: row;
        font-size: 0.8em;
        color: var(--text-muted);
        gap: 10px;
        margin-top: 20px;

        div {
            display: flex;
            flex-direction: row;
            gap: 3px;
            align-items: center;
        }
    }

    .notelink {
        img {
            height: 16px;
            width: auto;
        }
        margin-right: 8px;
    }

    h1 {
        font-size: 2em !important; /* 40px/16=2.5em */
        img {
            height: 32px;
            width: auto;
        }
    }

    h2 {
        font-size: 1.5em !important; /* 30px/16=1.875em */
    }

    h3 {
        font-size: 1.17em !important;
    }

    h4 {
        font-size: 1em !important;
        font-weight: bolder !important;
    }

    h5 {
        font-size: 0.83em !important;
        font-weight: bolder !important;
    }

    h6 {
        font-size: 0.67em !important;
        font-weight: bolder !important;
    }

    // table {
    //     width: 100% !important;
    //     border: 1px solid lightgray !important;

    //     td,
    //     th {
    //         padding: 5px 10px !important;

    //         hr {
    //             margin: 5px !important;
    //         }
    //     }
    // }

    .graph {
        flex: unset !important;
        @media (max-width: 1490px) {
            display: block !important;
            order: 3;
        }
    }

    .toc {
        @media (max-width: 1490px) {
            display: block !important;
        }
    }

    .sidebar-container {
        & > div:not(.graph) {
            width: 320px;
            max-height: 365px;
            overflow-y: auto;
        }

        @media (max-width: 1490px) {
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    nav.filetree-sidebar {
        top: 85px;
        left: 20px;
        position: fixed;
        height: calc(100% - 160px);
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        overflow-x: hidden;

        .search-button {
            margin: 10px;
            min-width: 160px;
            margin-bottom: 20px;
        }

        & > .folder {
            flex: 1;
            overflow-y: auto;
            overflow-x: hidden;
            margin-right: -10px;
        }
        .notelink {
            border-radius: 10px;
            padding: 5px 0 5px 8px;

            a::before {
                margin-right: 2px;
            }
        }

        .notelink.active-note {
            transform: unset;
        }

        .fa-sticky-note {
            display: none !important;
        }

        h1::before {
            content: " ";
            display: block;
            width: 100%;
            height: 3em;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url(/img/logo.svg);
            background-position: center;
        }
    }

    nav.toc {
        ol {
            list-style: none;
            padding-left: 10px;
            border-left: 2px solid var(--background-secondary);
        }

        & > ol {
            padding-left: 0;
            border-left: none;
        }
    }

    header {
        margin-bottom: 1.8em;
    }

    .cm-s-obsidian {
        .table-wrapper {
            overflow-x: scroll;
        }

        picture {
            max-width: 100%;
            height: auto;

            img {
                width: 100%;
                height: auto;
            }
        }
    }

    .cm-s-obsidian > *[id] {
        position: relative;
        cursor: pointer;
        &:hover {
            border: 1px dotted;
            border-color: var(--text-accent);
            margin-left: -10px;
            margin-right: -10px;
            padding: 10px;
        }
        &:hover::before {
            content: "Double-click to copy link";
            position: absolute;
            right: 0;
            top: -1.55em;
            font-weight: normal;
            font-size: 12px;
            color: var(--text-accent);
            font-variant: initial;
            letter-spacing: 0.24px;
            line-height: 14px;
        }
    }

    .referred {
        border: 1px dashed;
        border-color: var(--text-accent);
        padding: 10px;
        margin-left: -10px;
        margin-right: -10px;
    }

    #floating-control {
        position: fixed;
        color: var(--link-color);
        bottom: 1vmax;
        right: 1vmax;
        font-size: 24px;
        z-index: 999999;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 10px;

        .svg-icon,
        i {
            cursor: pointer;
            height: 24px;
            width: auto;
        }

        #theme-switch {
            .light {
                display: none;
            }

            .dark {
                display: none;
            }

            .auto {
                display: none;
            }
        }

        #theme-switch.light {
            .light {
                display: inline;
            }
        }

        #theme-switch.dark {
            .dark {
                display: inline;
            }
        }

        #theme-switch.auto {
            .auto {
                display: inline;
            }
        }
    }

    .fnote {
        display: none;
        background-color: var(--background-primary);
        border: 1px solid var(--text-accent);
        position: fixed;
        bottom: 10px;
        left: 0;
        right: 0;
        padding: 10px;
        text-align: center;
        z-index: 999;
    }

    .footnote-ref {
        line-height: 85%;

        .fnote-marker {
            background-color: var(--text-accent);
            padding: 2px 5px;
            color: white;
            border-radius: 4px;
            text-decoration: none;
            font-size: 0.7em;
            margin-top: -3px;
            &:hover {
                opacity: 0.7;
            }
        }
    }

    .shownote {
        display: block;
    }

    #forest-graph {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
        flex-direction: column;
        .forest-body {
            display: inline-flex;
            flex-direction: column;
            transform: rotate(45deg);
            margin: 60px;
            align-items: flex-end;

            @media (max-width: 575.99px) {
                transform: rotate(45deg) scale(0.9);
            }

            .forest-row {
                display: flex;
                flex-direction: row;
                align-items: flex-end;

                a {
                    width: 25px;
                    height: 25px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: -2px;
                    margin-left: -2px;

                    img {
                        transform: rotate(-45deg);
                    }
                }

                .plane {
                    cursor: inherit;
                }
            }
        }

        .forest-legends {
            margin-top: 10px;
            display: flex;
            gap: 10px;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;

            font-size: 0.8em;
            color: var(--text-muted);

            img {
                height: 1.5em;
                width: auto;
                margin-right: 5px;
            }
        }
    }

    .toc-container li::before {
        content: "" !important;
    }

    nav.navbar {
        top: 10px;
        right: 10px;
        left: 10px;
        width: calc(100% - 20px);
        border-radius: 10px;
        border: var(--cards-border-width) solid var(--background-modifier-border);
        z-index: 99999;
        .navbar-inner {
            h1::before {
                content: " ";
                display: inline-block;
                width: 1em;
                height: 1.2em;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url(/img/logo.svg);
                margin-right: 5px;
                background-position: bottom;
            }

            span {
                margin-left: 10px;
            }
        }

        .search-button {
            border-radius: 10px;

            @media (max-width: 800px) {
                margin-right: 10px;
            }
        }
    }

    .cards {
        table.dataview {
            width: var(--table-width);
        }
        th,
        td {
            border: none !important;
            flex-wrap: wrap;
            gap: 5px;

            a.tag {
                padding: 3px !important;
            }
        }
        table.dataview.table-view-table {
            thead.table-view-thead {
                display: none;

                &::before {
                    display: none;
                }
            }
            tbody {
                tr {
                    position: relative;
                    td {
                        img.inset-cover {
                            height: 70px;
                            width: auto;
                            position: absolute;
                            top: 0px;
                            right: 0px;
                            padding: 0;
                        }
                    }
                }
            }
        }
    }

    .cards-cover-no-border {
        table.dataview.table-view-table {
            tbody {
                tr {
                    td:first-child {
                        width: 100%;
                        img {
                            padding: 0;
                        }
                    }
                    // td:nth-child(2) {
                    //     min-height: 70px;
                    // }

                    td {
                        svg {
                            width: 14px;
                            height: auto;
                        }

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }
                }
            }
        }
    }

    .cards-title-hide-icons {
        table.dataview.table-view-table {
            tbody {
                tr {
                    td:nth-child(2),
                    td:first-child {
                        a::before {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    code[class*="language-"],
    pre[class*="language-"] {
        text-shadow: unset;
    }
}

// .callout {
//     background-color: transparent !important;
//     border: 1px solid rgba(var(--callout-color), 1) !important;
//     position: relative;
//     overflow: visible;
//     margin-top: calc(1em + 10px);

//     .callout-title {
//         display: inline-flex;
//         position: absolute;
//         top: -10px;
//         background-color: var(--background-primary);
//         padding-left: 5px;
//         padding-right: 5px;
//     }
// }

body.title-note-icon .cm-s-obsidian > header > h1[data-note-icon="stone"]::before,
body.filetree-note-icon .filename[data-note-icon="stone"]::before,
body.links-note-icon .internal-link[data-note-icon="stone"]::before,
body.backlinks-note-icon .backlink[data-note-icon="stone"]::before {
    background-image: url(/img/stone.svg);
}

body.title-note-icon .cm-s-obsidian > header > h1[data-note-icon="signpost"]::before,
body.filetree-note-icon .filename[data-note-icon="signpost"]::before,
body.links-note-icon .internal-link[data-note-icon="signpost"]::before,
body.backlinks-note-icon .backlink[data-note-icon="signpost"]::before {
    background-image: url(/img/signpost.svg);
}

body.title-note-icon .cm-s-obsidian > header > h1[data-note-icon="withered"]::before,
body.filetree-note-icon .filename[data-note-icon="withered"]::before,
body.links-note-icon .internal-link[data-note-icon="withered"]::before,
body.backlinks-note-icon .backlink[data-note-icon="withered"]::before {
    background-image: url(/img/withered.svg);
}

.align-icon {
    display: inline-flex;
    align-items: center;
}

.pill {
    background-color: var(--tag-background);
    border: var(--tag-border-width) solid var(--tag-border-color);
    border-radius: var(--tag-radius);
    color: var(--tag-color);
    font-size: var(--tag-size);
    text-decoration: var(--tag-decoration);
    padding: var(--tag-padding-y) var(--tag-padding-x);
    line-height: 1;

    &:hover {
        background-color: var(--tag-background-hover);
        border: var(--tag-border-width) solid var(--tag-border-color-hover);
        color: var(--tag-color-hover);
        text-decoration: var(--tag-decoration-hover);
    }
}

.aliases {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    margin-top: 20px;
    color: var(--tag-color);

    .heading:only-child {
        display: none;
    }
}

.header-tags {
    gap: 5px;
    display: flex;
}

.fullpage-overlay {
    position: fixed;
}

.sidebar {
    .toc-container {
        max-height: unset;

        @media (max-width: 1400px) {
            max-height: 320px;
        }
    }

    .backlinks {
        flex: unset;
        @media (max-width: 1400px) {
            order: 3;
        }
    }
}