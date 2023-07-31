export const showHome = (mainContent) => {
    
    const mainImage = document.createElement('img')
    const mainInfo = document.createElement('div')

    const mainTitle = document.createElement('h1')
    const mainText = document.createElement('p')

    mainImage.src = '../../Screenshot_1.png'

    mainInfo.classList.add('info__container')

    mainTitle.innerText = 'Título'

    mainText.innerText = 'Lorem ipsum dolor amen setLorem ipsum dolor amen set Lorem ipsum dolor amen set Lorem ipsum dolor amen set'


    mainInfo.append(mainTitle, mainText)
    mainContent.append(mainImage, mainInfo)
}