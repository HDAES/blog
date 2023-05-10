import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/frontEnd-story/': frontEnd(),
    '/daily-notes/':  sidebarDailyNotes(),
}

function frontEnd(){
    return [
        {
            text: '前端基础',
            collapsed: false,
            items: [
                { text: 'JavaScript基础', link: '/frontEnd-story/web/js-base' },
                { text: 'HTML/CSS', link: '/frontEnd-story/web/html-css' },
            ]
        },
        {
            text: 'TypeScript',
            collapsed: false,
            items: [
                { text: 'TypeScript 装饰器', link: '/frontEnd-story/ts/ts-decorator' },
            ]
        },
        {
            text: 'WebGL',
            collapsed: false,
            items: [
                { text: 'Threejs', link: '/frontEnd-story/webgl/threejs' },
            ]
        },
        {
            text: '常用库使用技巧',
            collapsed: false,
            items: [
                { text: 'Knex基本用法', link: '/frontEnd-story/npm/knex' },
                { text: 'Pinia基本用法', link: '/frontEnd-story/npm/pinia' },
            ]
        },
        {
            text: '自动化',
            collapsed: false,
            items: [
                { text: 'Github Actions', link: '/frontEnd-story/auto/github-actions' },
            ]
        },
    ]
}


function sidebarDailyNotes(){
    return [
        {
            text: '2023年',
            collapsed: false,
            items: [
                { text: '日常笔记1', link: '/ts/types' },
            ]
        },
    ]
}
