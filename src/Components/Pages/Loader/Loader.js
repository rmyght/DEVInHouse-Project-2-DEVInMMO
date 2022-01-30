import React from "react"
import ContentLoader from "react-content-loader"

// const MyLoader = (props) => (
//   <ContentLoader 
//     speed={2}
//     width={395}
//     height={395}
//     viewBox="0 0 395 395"
//     backgroundColor="#f3f3f3"
//     foregroundColor="#ecebeb"
//     {...props}
//   >
//     <rect x="0" y="0" rx="8" ry="8" width="395" height="395" />
//   </ContentLoader>
// )

// export default MyLoader


// const CardLoader = (props) => (
//   <ContentLoader 
//     speed={2}
//     width={1820}
//     height={825}
//     viewBox="0 0 1820 825"
//     backgroundColor="#f3f3f3"
//     foregroundColor="#ecebeb"
//     {...props}
//   >
//     {/* 20 */}
//     <rect x="70" y="20" rx="8" ry="8" width="410" height="395" />
//     <rect x="515" y="20" rx="8" ry="8" width="410" height="395" />
//     <rect x="70" y="445" rx="8" ry="8" width="410" height="395" />
//     <rect x="515" y="445" rx="8" ry="8" width="410" height="395" />
//     <rect x="960" y="20" rx="8" ry="8" width="410" height="395" />
//     <rect x="960" y="445" rx="8" ry="8" width="410" height="395" /> 
//     <rect x="1405" y="20" rx="8" ry="8" width="410" height="395" />
//     <rect x="1405" y="445" rx="8" ry="8" width="410" height="395" />
//   </ContentLoader>
// )

// export default CardLoader

const CardLoader = props => (
  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
    {...props}
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
)

export default CardLoader