{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red74\green80\blue93;\red155\green162\blue177;\red184\green93\blue213;
\red81\green157\blue235;\red136\green185\blue102;\red72\green168\blue181;\red197\green136\blue83;\red214\green85\blue98;
}
{\*\expandedcolortbl;;\cssrgb\c36078\c38824\c43922;\cssrgb\c67059\c69804\c74902;\cssrgb\c77647\c47059\c86667;
\cssrgb\c38039\c68627\c93725;\cssrgb\c59608\c76471\c47451;\cssrgb\c33725\c71373\c76078;\cssrgb\c81961\c60392\c40000;\cssrgb\c87843\c42353\c45882;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Attendre que le DOM soit charg\'e9\cf3 \strokec3 \
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 addEventListener\cf3 \strokec3 (\cf6 \strokec6 'DOMContentLoaded'\cf3 \strokec3 , \cf4 \strokec4 function\cf3 \strokec3 () \{\
    \cf2 \strokec2 // R\'e9cup\'e9rer les \'e9l\'e9ments du DOM\cf3 \strokec3 \
    \cf4 \strokec4 const\cf3 \strokec3  propertyValueInput \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 getElementById\cf3 \strokec3 (\cf6 \strokec6 'propertyValue'\cf3 \strokec3 );\
    \cf4 \strokec4 const\cf3 \strokec3  ownershipShareInput \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 getElementById\cf3 \strokec3 (\cf6 \strokec6 'ownershipShare'\cf3 \strokec3 );\
    \cf4 \strokec4 const\cf3 \strokec3  remainingLoanInput \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 getElementById\cf3 \strokec3 (\cf6 \strokec6 'remainingLoan'\cf3 \strokec3 );\
    \cf4 \strokec4 const\cf3 \strokec3  isMainResidenceCheckbox \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 getElementById\cf3 \strokec3 (\cf6 \strokec6 'isMainResidence'\cf3 \strokec3 );\
    \cf4 \strokec4 const\cf3 \strokec3  isRentedCheckbox \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 getElementById\cf3 \strokec3 (\cf6 \strokec6 'isRented'\cf3 \strokec3 );\
    \cf4 \strokec4 const\cf3 \strokec3  indivisionDiscountInput \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 getElementById\cf3 \strokec3 (\cf6 \strokec6 'indivisionDiscount'\cf3 \strokec3 );\
    \cf4 \strokec4 const\cf3 \strokec3  otherAssetsInput \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 getElementById\cf3 \strokec3 (\cf6 \strokec6 'otherAssets'\cf3 \strokec3 );\
    \cf4 \strokec4 const\cf3 \strokec3  calculateButton \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 getElementById\cf3 \strokec3 (\cf6 \strokec6 'calculateButton'\cf3 \strokec3 );\
    \cf4 \strokec4 const\cf3 \strokec3  resetButton \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 getElementById\cf3 \strokec3 (\cf6 \strokec6 'resetButton'\cf3 \strokec3 );\
    \cf4 \strokec4 const\cf3 \strokec3  resultsSection \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 getElementById\cf3 \strokec3 (\cf6 \strokec6 'resultsSection'\cf3 \strokec3 );\
    \cf4 \strokec4 const\cf3 \strokec3  totalPatrimoineElement \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 getElementById\cf3 \strokec3 (\cf6 \strokec6 'totalPatrimoine'\cf3 \strokec3 );\
    \cf4 \strokec4 const\cf3 \strokec3  ifiDueElement \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 getElementById\cf3 \strokec3 (\cf6 \strokec6 'ifiDue'\cf3 \strokec3 );\
    \cf4 \strokec4 const\cf3 \strokec3  taxRateElement \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 getElementById\cf3 \strokec3 (\cf6 \strokec6 'taxRate'\cf3 \strokec3 );\
    \cf4 \strokec4 const\cf3 \strokec3  calculationStepsContainer \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 getElementById\cf3 \strokec3 (\cf6 \strokec6 'calculationStepsContainer'\cf3 \strokec3 );\
\
    \cf2 \strokec2 // Fonction pour formater les nombres en euros\cf3 \strokec3 \
    \cf4 \strokec4 function\cf3 \strokec3  \cf5 \strokec5 formatEuros\cf3 \strokec3 (number) \{\
        \cf4 \strokec4 return\cf3 \strokec3  number.\cf5 \strokec5 toLocaleString\cf3 \strokec3 (\cf6 \strokec6 'fr-FR'\cf3 \strokec3 ) \cf7 \strokec7 +\cf3 \strokec3  \cf6 \strokec6 ' \'80'\cf3 \strokec3 ;\
    \}\
\
    \cf2 \strokec2 // Fonction pour nettoyer la valeur d'un input\cf3 \strokec3 \
    \cf4 \strokec4 function\cf3 \strokec3  \cf5 \strokec5 cleanInputValue\cf3 \strokec3 (input) \{\
        \cf4 \strokec4 return\cf3 \strokec3  \cf5 \strokec5 parseFloat\cf3 \strokec3 (input.value) \cf7 \strokec7 ||\cf3 \strokec3  \cf8 \strokec8 0\cf3 \strokec3 ;\
    \}\
\
    \cf2 \strokec2 // Fonction pour calculer l'IFI\cf3 \strokec3 \
    \cf4 \strokec4 function\cf3 \strokec3  \cf5 \strokec5 calculateIFI\cf3 \strokec3 () \{\
        \cf2 \strokec2 // R\'e9cup\'e9rer les valeurs des champs\cf3 \strokec3 \
        \cf4 \strokec4 const\cf3 \strokec3  propertyValue \cf7 \strokec7 =\cf3 \strokec3  \cf5 \strokec5 cleanInputValue\cf3 \strokec3 (propertyValueInput);\
        \cf4 \strokec4 const\cf3 \strokec3  ownershipShare \cf7 \strokec7 =\cf3 \strokec3  \cf5 \strokec5 cleanInputValue\cf3 \strokec3 (ownershipShareInput) \cf7 \strokec7 /\cf3 \strokec3  \cf8 \strokec8 100\cf3 \strokec3 ; \cf2 \strokec2 // Convertir en d\'e9cimal\cf3 \strokec3 \
        \cf4 \strokec4 const\cf3 \strokec3  remainingLoan \cf7 \strokec7 =\cf3 \strokec3  \cf5 \strokec5 cleanInputValue\cf3 \strokec3 (remainingLoanInput);\
        \cf4 \strokec4 const\cf3 \strokec3  isMainResidence \cf7 \strokec7 =\cf3 \strokec3  isMainResidenceCheckbox.checked;\
        \cf4 \strokec4 const\cf3 \strokec3  isRented \cf7 \strokec7 =\cf3 \strokec3  isRentedCheckbox.checked;\
        \cf4 \strokec4 const\cf3 \strokec3  indivisionDiscount \cf7 \strokec7 =\cf3 \strokec3  \cf5 \strokec5 cleanInputValue\cf3 \strokec3 (indivisionDiscountInput) \cf7 \strokec7 /\cf3 \strokec3  \cf8 \strokec8 100\cf3 \strokec3 ; \cf2 \strokec2 // Convertir en d\'e9cimal\cf3 \strokec3 \
        \cf4 \strokec4 const\cf3 \strokec3  otherAssets \cf7 \strokec7 =\cf3 \strokec3  \cf5 \strokec5 cleanInputValue\cf3 \strokec3 (otherAssetsInput);\
\
        \cf4 \strokec4 const\cf3 \strokec3  steps \cf7 \strokec7 =\cf3 \strokec3  [];\
        \
        \cf2 \strokec2 // \'c9tape 1: Calcul de la quote-part brute\cf3 \strokec3 \
        \cf4 \strokec4 const\cf3 \strokec3  grossShareValue \cf7 \strokec7 =\cf3 \strokec3  propertyValue \cf7 \strokec7 *\cf3 \strokec3  ownershipShare;\
        steps.\cf5 \strokec5 push\cf3 \strokec3 (\{\
            \cf8 \strokec8 title\cf7 \strokec7 :\cf3 \strokec3  \cf6 \strokec6 "Calcul de la quote-part brute"\cf3 \strokec3 ,\
            \cf8 \strokec8 description\cf7 \strokec7 :\cf3 \strokec3  \cf6 \strokec6 `Valeur v\'e9nale du bien (\cf3 \strokec3 $\{\cf5 \strokec5 formatEuros\cf3 \strokec3 (propertyValue)\}\cf6 \strokec6 ) \'d7 Quote-part (\cf3 \strokec3 $\{ownershipShare \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 100\cf3 \strokec3 \}\cf6 \strokec6 %)`\cf3 \strokec3 ,\
            \cf8 \strokec8 value\cf7 \strokec7 :\cf3 \strokec3  \cf5 \strokec5 formatEuros\cf3 \strokec3 (grossShareValue)\
        \});\
\
        \cf2 \strokec2 // \'c9tape 2: Application de l'abattement r\'e9sidence principale si applicable\cf3 \strokec3 \
        \cf4 \strokec4 let\cf3 \strokec3  valueAfterMainResidenceDiscount \cf7 \strokec7 =\cf3 \strokec3  grossShareValue;\
        \cf4 \strokec4 if\cf3 \strokec3  (isMainResidence) \{\
            valueAfterMainResidenceDiscount \cf7 \strokec7 =\cf3 \strokec3  grossShareValue \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.7\cf3 \strokec3 ; \cf2 \strokec2 // 30% d'abattement\cf3 \strokec3 \
            steps.\cf5 \strokec5 push\cf3 \strokec3 (\{\
                \cf8 \strokec8 title\cf7 \strokec7 :\cf3 \strokec3  \cf6 \strokec6 "Abattement r\'e9sidence principale de 30%"\cf3 \strokec3 ,\
                \cf8 \strokec8 description\cf7 \strokec7 :\cf3 \strokec3  \cf6 \strokec6 `\cf3 \strokec3 $\{\cf5 \strokec5 formatEuros\cf3 \strokec3 (grossShareValue)\}\cf6 \strokec6  \'d7 70%`\cf3 \strokec3 ,\
                \cf8 \strokec8 value\cf7 \strokec7 :\cf3 \strokec3  \cf5 \strokec5 formatEuros\cf3 \strokec3 (valueAfterMainResidenceDiscount)\
            \});\
        \}\
\
        \cf2 \strokec2 // \'c9tape 3: Application de la d\'e9cote location si applicable\cf3 \strokec3 \
        \cf4 \strokec4 let\cf3 \strokec3  valueAfterRentalDiscount \cf7 \strokec7 =\cf3 \strokec3  valueAfterMainResidenceDiscount;\
        \cf4 \strokec4 if\cf3 \strokec3  (isRented) \{\
            valueAfterRentalDiscount \cf7 \strokec7 =\cf3 \strokec3  valueAfterMainResidenceDiscount \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.8\cf3 \strokec3 ; \cf2 \strokec2 // 20% de d\'e9cote\cf3 \strokec3 \
            steps.\cf5 \strokec5 push\cf3 \strokec3 (\{\
                \cf8 \strokec8 title\cf7 \strokec7 :\cf3 \strokec3  \cf6 \strokec6 "D\'e9cote bien lou\'e9 de 20%"\cf3 \strokec3 ,\
                \cf8 \strokec8 description\cf7 \strokec7 :\cf3 \strokec3  \cf6 \strokec6 `\cf3 \strokec3 $\{\cf5 \strokec5 formatEuros\cf3 \strokec3 (valueAfterMainResidenceDiscount)\}\cf6 \strokec6  \'d7 80%`\cf3 \strokec3 ,\
                \cf8 \strokec8 value\cf7 \strokec7 :\cf3 \strokec3  \cf5 \strokec5 formatEuros\cf3 \strokec3 (valueAfterRentalDiscount)\
            \});\
        \}\
\
        \cf2 \strokec2 // \'c9tape 4: Application de la d\'e9cote d'indivision\cf3 \strokec3 \
        \cf4 \strokec4 const\cf3 \strokec3  valueAfterIndivisionDiscount \cf7 \strokec7 =\cf3 \strokec3  valueAfterRentalDiscount \cf7 \strokec7 *\cf3 \strokec3  (\cf8 \strokec8 1\cf3 \strokec3  \cf7 \strokec7 -\cf3 \strokec3  indivisionDiscount);\
        steps.\cf5 \strokec5 push\cf3 \strokec3 (\{\
            \cf8 \strokec8 title\cf7 \strokec7 :\cf3 \strokec3  \cf6 \strokec6 `D\'e9cote d'indivision de \cf3 \strokec3 $\{indivisionDiscount \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 100\cf3 \strokec3 \}\cf6 \strokec6 %`\cf3 \strokec3 ,\
            \cf8 \strokec8 description\cf7 \strokec7 :\cf3 \strokec3  \cf6 \strokec6 `\cf3 \strokec3 $\{\cf5 \strokec5 formatEuros\cf3 \strokec3 (valueAfterRentalDiscount)\}\cf6 \strokec6  \'d7 \cf3 \strokec3 $\{\cf8 \strokec8 100\cf3 \strokec3  \cf7 \strokec7 -\cf3 \strokec3  indivisionDiscount \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 100\cf3 \strokec3 \}\cf6 \strokec6 %`\cf3 \strokec3 ,\
            \cf8 \strokec8 value\cf7 \strokec7 :\cf3 \strokec3  \cf5 \strokec5 formatEuros\cf3 \strokec3 (valueAfterIndivisionDiscount)\
        \});\
\
        \cf2 \strokec2 // \'c9tape 5: D\'e9duction des dettes (pr\'eat restant)\cf3 \strokec3 \
        \cf4 \strokec4 const\cf3 \strokec3  netValue \cf7 \strokec7 =\cf3 \strokec3  Math.\cf5 \strokec5 max\cf3 \strokec3 (\cf8 \strokec8 0\cf3 \strokec3 , valueAfterIndivisionDiscount \cf7 \strokec7 -\cf3 \strokec3  remainingLoan);\
        \cf4 \strokec4 if\cf3 \strokec3  (remainingLoan \cf7 \strokec7 >\cf3 \strokec3  \cf8 \strokec8 0\cf3 \strokec3 ) \{\
            steps.\cf5 \strokec5 push\cf3 \strokec3 (\{\
                \cf8 \strokec8 title\cf7 \strokec7 :\cf3 \strokec3  \cf6 \strokec6 "D\'e9duction du capital restant d\'fb"\cf3 \strokec3 ,\
                \cf8 \strokec8 description\cf7 \strokec7 :\cf3 \strokec3  \cf6 \strokec6 `\cf3 \strokec3 $\{\cf5 \strokec5 formatEuros\cf3 \strokec3 (valueAfterIndivisionDiscount)\}\cf6 \strokec6  - \cf3 \strokec3 $\{\cf5 \strokec5 formatEuros\cf3 \strokec3 (remainingLoan)\}\cf6 \strokec6 `\cf3 \strokec3 ,\
                \cf8 \strokec8 value\cf7 \strokec7 :\cf3 \strokec3  \cf5 \strokec5 formatEuros\cf3 \strokec3 (netValue)\
            \});\
        \}\
\
        \cf2 \strokec2 // Calcul du patrimoine total (incluant ce bien + autres biens d\'e9clar\'e9s)\cf3 \strokec3 \
        \cf4 \strokec4 const\cf3 \strokec3  totalPatrimoineValue \cf7 \strokec7 =\cf3 \strokec3  netValue \cf7 \strokec7 +\cf3 \strokec3  otherAssets;\
        steps.\cf5 \strokec5 push\cf3 \strokec3 (\{\
            \cf8 \strokec8 title\cf7 \strokec7 :\cf3 \strokec3  \cf6 \strokec6 "Patrimoine total imposable"\cf3 \strokec3 ,\
            \cf8 \strokec8 description\cf7 \strokec7 :\cf3 \strokec3  \cf6 \strokec6 `Valeur nette du bien + Autres actifs`\cf3 \strokec3 ,\
            \cf8 \strokec8 value\cf7 \strokec7 :\cf3 \strokec3  \cf5 \strokec5 formatEuros\cf3 \strokec3 (totalPatrimoineValue)\
        \});\
\
        \cf2 \strokec2 // Calcul de l'IFI selon le bar\'e8me\cf3 \strokec3 \
        \cf4 \strokec4 let\cf3 \strokec3  ifi \cf7 \strokec7 =\cf3 \strokec3  \cf8 \strokec8 0\cf3 \strokec3 ;\
        \cf4 \strokec4 if\cf3 \strokec3  (totalPatrimoineValue \cf7 \strokec7 >\cf3 \strokec3  \cf8 \strokec8 10000000\cf3 \strokec3 ) \{\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (totalPatrimoineValue \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 10000000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.015\cf3 \strokec3 ;\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (\cf8 \strokec8 10000000\cf3 \strokec3  \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 5000000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.0125\cf3 \strokec3 ;\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (\cf8 \strokec8 5000000\cf3 \strokec3  \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 2570000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.01\cf3 \strokec3 ;\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (\cf8 \strokec8 2570000\cf3 \strokec3  \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 1300000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.007\cf3 \strokec3 ;\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (\cf8 \strokec8 1300000\cf3 \strokec3  \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 800000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.005\cf3 \strokec3 ;\
        \} \cf4 \strokec4 else\cf3 \strokec3  \cf4 \strokec4 if\cf3 \strokec3  (totalPatrimoineValue \cf7 \strokec7 >\cf3 \strokec3  \cf8 \strokec8 5000000\cf3 \strokec3 ) \{\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (totalPatrimoineValue \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 5000000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.0125\cf3 \strokec3 ;\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (\cf8 \strokec8 5000000\cf3 \strokec3  \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 2570000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.01\cf3 \strokec3 ;\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (\cf8 \strokec8 2570000\cf3 \strokec3  \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 1300000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.007\cf3 \strokec3 ;\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (\cf8 \strokec8 1300000\cf3 \strokec3  \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 800000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.005\cf3 \strokec3 ;\
        \} \cf4 \strokec4 else\cf3 \strokec3  \cf4 \strokec4 if\cf3 \strokec3  (totalPatrimoineValue \cf7 \strokec7 >\cf3 \strokec3  \cf8 \strokec8 2570000\cf3 \strokec3 ) \{\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (totalPatrimoineValue \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 2570000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.01\cf3 \strokec3 ;\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (\cf8 \strokec8 2570000\cf3 \strokec3  \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 1300000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.007\cf3 \strokec3 ;\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (\cf8 \strokec8 1300000\cf3 \strokec3  \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 800000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.005\cf3 \strokec3 ;\
        \} \cf4 \strokec4 else\cf3 \strokec3  \cf4 \strokec4 if\cf3 \strokec3  (totalPatrimoineValue \cf7 \strokec7 >\cf3 \strokec3  \cf8 \strokec8 1300000\cf3 \strokec3 ) \{\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (totalPatrimoineValue \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 1300000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.007\cf3 \strokec3 ;\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (\cf8 \strokec8 1300000\cf3 \strokec3  \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 800000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.005\cf3 \strokec3 ;\
        \} \cf4 \strokec4 else\cf3 \strokec3  \cf4 \strokec4 if\cf3 \strokec3  (totalPatrimoineValue \cf7 \strokec7 >\cf3 \strokec3  \cf8 \strokec8 800000\cf3 \strokec3 ) \{\
            ifi \cf7 \strokec7 +=\cf3 \strokec3  (totalPatrimoineValue \cf7 \strokec7 -\cf3 \strokec3  \cf8 \strokec8 800000\cf3 \strokec3 ) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 0.005\cf3 \strokec3 ;\
        \}\
\
        \cf2 \strokec2 // Afficher les r\'e9sultats\cf3 \strokec3 \
        totalPatrimoineElement.textContent \cf7 \strokec7 =\cf3 \strokec3  \cf5 \strokec5 formatEuros\cf3 \strokec3 (totalPatrimoineValue);\
        ifiDueElement.textContent \cf7 \strokec7 =\cf3 \strokec3  \cf5 \strokec5 formatEuros\cf3 \strokec3 (Math.\cf5 \strokec5 round\cf3 \strokec3 (ifi));\
        \
        \cf2 \strokec2 // Afficher le taux moyen d'imposition ou un message si inf\'e9rieur au seuil\cf3 \strokec3 \
        \cf4 \strokec4 if\cf3 \strokec3  (totalPatrimoineValue \cf7 \strokec7 <\cf3 \strokec3  \cf8 \strokec8 1300000\cf3 \strokec3 ) \{\
            taxRateElement.textContent \cf7 \strokec7 =\cf3 \strokec3  \cf6 \strokec6 "Patrimoine inf\'e9rieur au seuil d'imposition mais soumis \'e0 d\'e9claration si > 800 000 \'80"\cf3 \strokec3 ;\
        \} \cf4 \strokec4 else\cf3 \strokec3  \{\
            \cf4 \strokec4 const\cf3 \strokec3  taxRate \cf7 \strokec7 =\cf3 \strokec3  (ifi \cf7 \strokec7 /\cf3 \strokec3  totalPatrimoineValue) \cf7 \strokec7 *\cf3 \strokec3  \cf8 \strokec8 100\cf3 \strokec3 ;\
            taxRateElement.textContent \cf7 \strokec7 =\cf3 \strokec3  \cf6 \strokec6 `Taux moyen d'imposition: \cf3 \strokec3 $\{taxRate.\cf5 \strokec5 toFixed\cf3 \strokec3 (\cf8 \strokec8 2\cf3 \strokec3 )\}\cf6 \strokec6 %`\cf3 \strokec3 ;\
        \}\
\
        \cf2 \strokec2 // Afficher les \'e9tapes de calcul\cf3 \strokec3 \
        \cf5 \strokec5 renderCalculationSteps\cf3 \strokec3 (steps);\
\
        \cf2 \strokec2 // Afficher la section des r\'e9sultats\cf3 \strokec3 \
        resultsSection.classList.\cf5 \strokec5 remove\cf3 \strokec3 (\cf6 \strokec6 'hidden'\cf3 \strokec3 );\
    \}\
\
    \cf2 \strokec2 // Fonction pour afficher les \'e9tapes de calcul\cf3 \strokec3 \
    \cf4 \strokec4 function\cf3 \strokec3  \cf5 \strokec5 renderCalculationSteps\cf3 \strokec3 (steps) \{\
        calculationStepsContainer.innerHTML \cf7 \strokec7 =\cf3 \strokec3  \cf6 \strokec6 ''\cf3 \strokec3 ;\
        steps.\cf5 \strokec5 forEach\cf3 \strokec3 ((step, index) \cf7 \strokec7 =>\cf3 \strokec3  \{\
            \cf4 \strokec4 const\cf3 \strokec3  stepElement \cf7 \strokec7 =\cf3 \strokec3  \cf4 \strokec4 document\cf3 \strokec3 .\cf5 \strokec5 createElement\cf3 \strokec3 (\cf6 \strokec6 'div'\cf3 \strokec3 );\
            stepElement.className \cf7 \strokec7 =\cf3 \strokec3  \cf6 \strokec6 'step-item'\cf3 \strokec3 ;\
            stepElement.innerHTML \cf7 \strokec7 =\cf3 \strokec3  \cf6 \strokec6 `\cf3 \strokec3 \
                \cf9 \strokec9 <div \cf8 \strokec8 class\cf6 \strokec6 ="step-number"\cf9 \strokec9 >\cf3 \strokec3 $\{index \cf7 \strokec7 +\cf3 \strokec3  \cf8 \strokec8 1\cf3 \strokec3 \}\cf9 \strokec9 </div>\cf3 \strokec3 \
                \cf9 \strokec9 <div \cf8 \strokec8 class\cf6 \strokec6 ="step-content"\cf9 \strokec9 >\cf3 \strokec3 \
                    \cf9 \strokec9 <h4 \cf8 \strokec8 class\cf6 \strokec6 ="step-title"\cf9 \strokec9 >\cf3 \strokec3 $\{step.title\}\cf9 \strokec9 </h4>\cf3 \strokec3 \
                    \cf9 \strokec9 <p \cf8 \strokec8 class\cf6 \strokec6 ="step-description"\cf9 \strokec9 >\cf3 \strokec3 $\{step.description\}\cf9 \strokec9 </p>\cf3 \strokec3 \
                    \cf9 \strokec9 <p \cf8 \strokec8 class\cf6 \strokec6 ="step-result"\cf9 \strokec9 >\cf3 \strokec3 $\{step.value\}\cf9 \strokec9 </p>\cf3 \strokec3 \
                \cf9 \strokec9 </div>\cf3 \strokec3 \
            \cf6 \strokec6 `\cf3 \strokec3 ;\
            calculationStepsContainer.\cf5 \strokec5 appendChild\cf3 \strokec3 (stepElement);\
        \});\
    \}\
\
    \cf2 \strokec2 // Fonction pour r\'e9initialiser le formulaire\cf3 \strokec3 \
    \cf4 \strokec4 function\cf3 \strokec3  \cf5 \strokec5 resetForm\cf3 \strokec3 () \{\
        propertyValueInput.value \cf7 \strokec7 =\cf3 \strokec3  \cf6 \strokec6 '1000000'\cf3 \strokec3 ;\
        ownershipShareInput.value \cf7 \strokec7 =\cf3 \strokec3  \cf6 \strokec6 '50'\cf3 \strokec3 ;\
        remainingLoanInput.value \cf7 \strokec7 =\cf3 \strokec3  \cf6 \strokec6 '0'\cf3 \strokec3 ;\
        isMainResidenceCheckbox.checked \cf7 \strokec7 =\cf3 \strokec3  \cf8 \strokec8 false\cf3 \strokec3 ;\
        isRentedCheckbox.checked \cf7 \strokec7 =\cf3 \strokec3  \cf8 \strokec8 false\cf3 \strokec3 ;\
        indivisionDiscountInput.value \cf7 \strokec7 =\cf3 \strokec3  \cf6 \strokec6 '20'\cf3 \strokec3 ;\
        otherAssetsInput.value \cf7 \strokec7 =\cf3 \strokec3  \cf6 \strokec6 '0'\cf3 \strokec3 ;\
        resultsSection.classList.\cf5 \strokec5 add\cf3 \strokec3 (\cf6 \strokec6 'hidden'\cf3 \strokec3 );\
    \}\
\
    \cf2 \strokec2 // Attacher les \'e9couteurs d'\'e9v\'e9nements\cf3 \strokec3 \
    calculateButton.\cf5 \strokec5 addEventListener\cf3 \strokec3 (\cf6 \strokec6 'click'\cf3 \strokec3 , calculateIFI);\
    resetButton.\cf5 \strokec5 addEventListener\cf3 \strokec3 (\cf6 \strokec6 'click'\cf3 \strokec3 , resetForm);\
\
    \cf2 \strokec2 // Valider les entr\'e9es num\'e9riques\cf3 \strokec3 \
    \cf4 \strokec4 const\cf3 \strokec3  numericInputs \cf7 \strokec7 =\cf3 \strokec3  [propertyValueInput, ownershipShareInput, remainingLoanInput, indivisionDiscountInput, otherAssetsInput];\
    numericInputs.\cf5 \strokec5 forEach\cf3 \strokec3 (input \cf7 \strokec7 =>\cf3 \strokec3  \{\
        input.\cf5 \strokec5 addEventListener\cf3 \strokec3 (\cf6 \strokec6 'input'\cf3 \strokec3 , \cf4 \strokec4 function\cf3 \strokec3 () \{\
            \cf4 \strokec4 let\cf3 \strokec3  value \cf7 \strokec7 =\cf3 \strokec3  \cf5 \strokec5 parseFloat\cf3 \strokec3 (\cf4 \strokec4 this\cf3 \strokec3 .value) \cf7 \strokec7 ||\cf3 \strokec3  \cf8 \strokec8 0\cf3 \strokec3 ;\
            \
            \cf2 \strokec2 // Appliquer les limites\cf3 \strokec3 \
            \cf4 \strokec4 if\cf3 \strokec3  (\cf4 \strokec4 this\cf3 \strokec3  \cf7 \strokec7 ===\cf3 \strokec3  ownershipShareInput) \{\
                value \cf7 \strokec7 =\cf3 \strokec3  Math.\cf5 \strokec5 min\cf3 \strokec3 (\cf8 \strokec8 100\cf3 \strokec3 , Math.\cf5 \strokec5 max\cf3 \strokec3 (\cf8 \strokec8 0\cf3 \strokec3 , value));\
            \} \cf4 \strokec4 else\cf3 \strokec3  \cf4 \strokec4 if\cf3 \strokec3  (\cf4 \strokec4 this\cf3 \strokec3  \cf7 \strokec7 ===\cf3 \strokec3  indivisionDiscountInput) \{\
                value \cf7 \strokec7 =\cf3 \strokec3  Math.\cf5 \strokec5 min\cf3 \strokec3 (\cf8 \strokec8 30\cf3 \strokec3 , Math.\cf5 \strokec5 max\cf3 \strokec3 (\cf8 \strokec8 0\cf3 \strokec3 , value));\
            \} \cf4 \strokec4 else\cf3 \strokec3  \{\
                value \cf7 \strokec7 =\cf3 \strokec3  Math.\cf5 \strokec5 max\cf3 \strokec3 (\cf8 \strokec8 0\cf3 \strokec3 , value);\
            \}\
            \
            \cf2 \strokec2 // Mettre \'e0 jour la valeur si elle a \'e9t\'e9 modifi\'e9e\cf3 \strokec3 \
            \cf4 \strokec4 if\cf3 \strokec3  (\cf5 \strokec5 parseFloat\cf3 \strokec3 (\cf4 \strokec4 this\cf3 \strokec3 .value) \cf7 \strokec7 !==\cf3 \strokec3  value) \{\
                \cf4 \strokec4 this\cf3 \strokec3 .value \cf7 \strokec7 =\cf3 \strokec3  value;\
            \}\
        \});\
    \});\
\});}