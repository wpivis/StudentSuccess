import { View, Text } from 'react-native'
import React from 'react'
import { AppDrawerItemName } from '../api/navigation'
import { AppDrawerItemData } from '../api/data'
import { Header1, Header2, Header3, Header4, Paragraph, Anchor, ListItem } from './PageElements'

/**
 * A component for rendering page data for drawer items by drawer item key
 * @param {string} params.pageKey - enum key for which page this will render 
 * @returns View with data by page key
 */
export default function DrawerPage({pageKey}) {
  return (
    <View style={{alignItems: "center", width: "100%", display: "flex", flexDirection: "column"}}>
      { renderPage(AppDrawerItemData[pageKey]) }
    </View>
  )
}

function renderPage(pageData) {
  return pageData.map((pageElement, index) => {
    const pageElementType = pageElement.type;
    switch (pageElementType) {
      case "h1":
        return <Header1 text={pageElement.text} key={index}/>;
      case "h2":
        return <Header2 text={pageElement.text} key={index}/>;
      case "h3":
        return <Header3 text={pageElement.text} key={index}/>;
      case "h4":
        return <Header4 text={pageElement.text} key={index}/>;
      case "p":
        return <Paragraph text={pageElement.text} key={index}/>;
      case "a":
        return <Anchor href={pageElement.href} text={pageElement.text} key={index}/>;
      case "li":
        return <ListItem href={pageElement.href} text={pageElement.text} key={index}/>;
      default:
        return;
    }
  })
}