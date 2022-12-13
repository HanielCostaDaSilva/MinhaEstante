export default function ItemBox( ItemImage, ItemTitle, ItemPageLink ){
    return (
    <div class="livro-container">
    <a href={ItemPageLink}> <img src={ItemImage} /></a>
    <p> ${(ItemTitle.split('_').join(' '))}</p>
    </div>
    )
}