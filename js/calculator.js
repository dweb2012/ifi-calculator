// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les éléments du DOM
    const propertyValueInput = document.getElementById('propertyValue');
    const ownershipShareInput = document.getElementById('ownershipShare');
    const remainingLoanInput = document.getElementById('remainingLoan');
    const isMainResidenceCheckbox = document.getElementById('isMainResidence');
    const isRentedCheckbox = document.getElementById('isRented');
    const indivisionDiscountInput = document.getElementById('indivisionDiscount');
    const otherAssetsInput = document.getElementById('otherAssets');
    const calculateButton = document.getElementById('calculateButton');
    const resetButton = document.getElementById('resetButton');
    const resultsSection = document.getElementById('resultsSection');
    const totalPatrimoineElement = document.getElementById('totalPatrimoine');
    const ifiDueElement = document.getElementById('ifiDue');
    const taxRateElement = document.getElementById('taxRate');
    const calculationStepsContainer = document.getElementById('calculationStepsContainer');

    // Fonction pour formater les nombres en euros
    function formatEuros(number) {
        return number.toLocaleString('fr-FR') + ' €';
    }

    // Fonction pour nettoyer la valeur d'un input
    function cleanInputValue(input) {
        return parseFloat(input.value) || 0;
    }

    // Fonction pour calculer l'IFI
    function calculateIFI() {
        // Récupérer les valeurs des champs
        const propertyValue = cleanInputValue(propertyValueInput);
        const ownershipShare = cleanInputValue(ownershipShareInput) / 100; // Convertir en décimal
        const remainingLoan = cleanInputValue(remainingLoanInput);
        const isMainResidence = isMainResidenceCheckbox.checked;
        const isRented = isRentedCheckbox.checked;
        const indivisionDiscount = cleanInputValue(indivisionDiscountInput) / 100; // Convertir en décimal
        const otherAssets = cleanInputValue(otherAssetsInput);

        const steps = [];
        
        // Étape 1: Calcul de la quote-part brute
        const grossShareValue = propertyValue * ownershipShare;
        steps.push({
            title: "Calcul de la quote-part brute",
            description: `Valeur vénale du bien (${formatEuros(propertyValue)}) × Quote-part (${ownershipShare * 100}%)`,
            value: formatEuros(grossShareValue)
        });

        // Étape 2: Application de l'abattement résidence principale si applicable
        let valueAfterMainResidenceDiscount = grossShareValue;
        if (isMainResidence) {
            valueAfterMainResidenceDiscount = grossShareValue * 0.7; // 30% d'abattement
            steps.push({
                title: "Abattement résidence principale de 30%",
                description: `${formatEuros(grossShareValue)} × 70%`,
                value: formatEuros(valueAfterMainResidenceDiscount)
            });
        }

        // Étape 3: Application de la décote location si applicable
        let valueAfterRentalDiscount = valueAfterMainResidenceDiscount;
        if (isRented) {
            valueAfterRentalDiscount = valueAfterMainResidenceDiscount * 0.8; // 20% de décote
            steps.push({
                title: "Décote bien loué de 20%",
                description: `${formatEuros(valueAfterMainResidenceDiscount)} × 80%`,
                value: formatEuros(valueAfterRentalDiscount)
            });
        }

        // Étape 4: Application de la décote d'indivision
        const valueAfterIndivisionDiscount = valueAfterRentalDiscount * (1 - indivisionDiscount);
        steps.push({
            title: `Décote d'indivision de ${indivisionDiscount * 100}%`,
            description: `${formatEuros(valueAfterRentalDiscount)} × ${100 - indivisionDiscount * 100}%`,
            value: formatEuros(valueAfterIndivisionDiscount)
        });

        // Étape 5: Déduction des dettes (prêt restant)
        const netValue = Math.max(0, valueAfterIndivisionDiscount - remainingLoan);
        if (remainingLoan > 0) {
            steps.push({
                title: "Déduction du capital restant dû",
                description: `${formatEuros(valueAfterIndivisionDiscount)} - ${formatEuros(remainingLoan)}`,
                value: formatEuros(netValue)
            });
        }

        // Calcul du patrimoine total (incluant ce bien + autres biens déclarés)
        const totalPatrimoineValue = netValue + otherAssets;
        steps.push({
            title: "Patrimoine total imposable",
            description: `Valeur nette du bien + Autres actifs`,
            value: formatEuros(totalPatrimoineValue)
        });

        // Calcul de l'IFI selon le barème
        let ifi = 0;
        if (totalPatrimoineValue > 10000000) {
            ifi += (totalPatrimoineValue - 10000000) * 0.015;
            ifi += (10000000 - 5000000) * 0.0125;
            ifi += (5000000 - 2570000) * 0.01;
            ifi += (2570000 - 1300000) * 0.007;
            ifi += (1300000 - 800000) * 0.005;
        } else if (totalPatrimoineValue > 5000000) {
            ifi += (totalPatrimoineValue - 5000000) * 0.0125;
            ifi += (5000000 - 2570000) * 0.01;
            ifi += (2570000 - 1300000) * 0.007;
            ifi += (1300000 - 800000) * 0.005;
        } else if (totalPatrimoineValue > 2570000) {
            ifi += (totalPatrimoineValue - 2570000) * 0.01;
            ifi += (2570000 - 1300000) * 0.007;
            ifi += (1300000 - 800000) * 0.005;
        } else if (totalPatrimoineValue > 1300000) {
            ifi += (totalPatrimoineValue - 1300000) * 0.007;
            ifi += (1300000 - 800000) * 0.005;
        } else if (totalPatrimoineValue > 800000) {
            ifi += (totalPatrimoineValue - 800000) * 0.005;
        }

        // Afficher les résultats
        totalPatrimoineElement.textContent = formatEuros(totalPatrimoineValue);
        ifiDueElement.textContent = formatEuros(Math.round(ifi));
        
        // Afficher le taux moyen d'imposition ou un message si inférieur au seuil
        if (totalPatrimoineValue < 1300000) {
            taxRateElement.textContent = "Patrimoine inférieur au seuil d'imposition mais soumis à déclaration si > 800 000 €";
        } else {
            const taxRate = (ifi / totalPatrimoineValue) * 100;
            taxRateElement.textContent = `Taux moyen d'imposition: ${taxRate.toFixed(2)}%`;
        }

        // Afficher les étapes de calcul
        renderCalculationSteps(steps);

        // Afficher la section des résultats
        resultsSection.classList.remove('hidden');
    }

    // Fonction pour afficher les étapes de calcul
    function renderCalculationSteps(steps) {
        calculationStepsContainer.innerHTML = '';
        steps.forEach((step, index) => {
            const stepElement = document.createElement('div');
            stepElement.className = 'step-item';
            stepElement.innerHTML = `
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                    <h4 class="step-title">${step.title}</h4>
                    <p class="step-description">${step.description}</p>
                    <p class="step-result">${step.value}</p>
                </div>
            `;
            calculationStepsContainer.appendChild(stepElement);
        });
    }

    // Fonction pour réinitialiser le formulaire
    function resetForm() {
        propertyValueInput.value = '1000000';
        ownershipShareInput.value = '50';
        remainingLoanInput.value = '0';
        isMainResidenceCheckbox.checked = false;
        isRentedCheckbox.checked = false;
        indivisionDiscountInput.value = '20';
        otherAssetsInput.value = '0';
        resultsSection.classList.add('hidden');
    }

    // Attacher les écouteurs d'événements
    calculateButton.addEventListener('click', calculateIFI);
    resetButton.addEventListener('click', resetForm);

    // Valider les entrées numériques
    const numericInputs = [propertyValueInput, ownershipShareInput, remainingLoanInput, indivisionDiscountInput, otherAssetsInput];
    numericInputs.forEach(input => {
        input.addEventListener('input', function() {
            let value = parseFloat(this.value) || 0;
            
            // Appliquer les limites
            if (this === ownershipShareInput) {
                value = Math.min(100, Math.max(0, value));
            } else if (this === indivisionDiscountInput) {
                value = Math.min(30, Math.max(0, value));
            } else {
                value = Math.max(0, value);
            }
            
            // Mettre à jour la valeur si elle a été modifiée
            if (parseFloat(this.value) !== value) {
                this.value = value;
            }
        });
    });
});
