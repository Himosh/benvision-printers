// import React from 'react';
// import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
// import PageSizeData from '../Data';

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     padding: 20,
//   },
//   section: {
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   text: {
//     fontSize: 14,
//     marginBottom: 3,
//   },
// });

// const PdfDocument = ({
//   selectedFrontMaterial,
//   selectedPageSizeId,
//   selectedFrontMaterialColour,
//   selectedBackMaterial,
//   selectedBackMaterialColour,
//   selectedPaperColour,
//   selectedCopySide,
//   selectedCopyColour,
//   selectedBindingOption,
//   selectedPaddingOption,
//   selectedFoldingOption,
//   selectedStaplingOption,
//   selectedPaperType,
// }) => {
//   const generatePdfBlob = async () => {
//     const selectedPageSize = PageSizeData.find((item) => item.id === selectedPageSizeId);

//     // Create PDF content
//     const pdfContent = (
//       <Document>
//         <Page size="A4" style={styles.page}>
//           <View style={styles.section}>
//             <Text style={styles.title}>Front Cover</Text>
//             <Text style={styles.text}>Material: {selectedFrontMaterial}</Text>
//             <Text style={styles.text}>Color: {selectedFrontMaterialColour}</Text>
//           </View>
//           <View style={styles.section}>
//             <Text style={styles.title}>Back Cover</Text>
//             <Text style={styles.text}>Material: {selectedBackMaterial}</Text>
//             <Text style={styles.text}>Color: {selectedBackMaterialColour}</Text>
//           </View>
//           <View style={styles.section}>
//             <Text style={styles.title}>Paper/Envelope Colour</Text>
//             <Text style={styles.text}>Color: {selectedPaperColour}</Text>
//           </View>
//           <View style={styles.section}>
//             <Text style={styles.title}>Copies to be Printed</Text>
//             <Text style={styles.text}>Side: {selectedCopySide}</Text>
//             <Text style={styles.text}>Color: {selectedCopyColour}</Text>
//           </View>
//           <View style={styles.section}>
//             <Text style={styles.title}>Binding Option</Text>
//             <Text style={styles.text}>{selectedBindingOption}</Text>
//           </View>
//           <View style={styles.section}>
//             <Text style={styles.title}>Padding Option</Text>
//             <Text style={styles.text}>{selectedPaddingOption}</Text>
//           </View>
//           <View style={styles.section}>
//             <Text style={styles.title}>Folding Option</Text>
//             <Text style={styles.text}>{selectedFoldingOption}</Text>
//           </View>
//           <View style={styles.section}>
//             <Text style={styles.title}>Stapling Option</Text>
//             <Text style={styles.text}>{selectedStaplingOption}</Text>
//           </View>
//           <View style={styles.section}>
//             <Text style={styles.title}>Paper Type</Text>
//             <Text style={styles.text}>{selectedPaperType}</Text>
//           </View>
//           <View style={styles.section}>
//             <Text style={styles.title}>Selected Size</Text>
//             <Text style={styles.text}>Size: {selectedPageSize.size}</Text>
//             <Text style={styles.text}>
//               Dimensions: {selectedPageSize.width} x {selectedPageSize.height}mm
//             </Text>
//           </View>
//         </Page>
//       </Document>
//     );

//     try {
//       // Generate PDF blob
//       const pdfBlob = await pdf(pdfContent).toBlob();
//       return pdfBlob;
//     } catch (error) {
//       console.error('Failed to generate PDF blob:', error);
//       throw error;
//     }
//   };

//   return generatePdfBlob();
// };

// export default PdfDocument;
