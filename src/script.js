const bmiTest = () => {
    const userHeightInput = document.getElementById('height');
    const userHeight = +userHeightInput.value;
    const userWeightInput = document.getElementById('weight');
    const userWeight = +userWeightInput.value;
    const userAgeInput = document.getElementById('age');
    const userAge = +userAgeInput.value;
    const bmiResult = document.getElementById('bmi-result');

    console.log(userHeight, userWeight, userAge);

    bmiResult.style.display = 'block';

    if (userHeight === 0 || isNaN(userHeight)) {
        bmiResult.innerText = "Provide a valid Height!";
    }
    else if (userWeight === 0 || isNaN(userWeight)) {
        bmiResult.innerText = "Provide a valid Weight!";
    }
    else {
        let bmi = (userWeight / ((userHeight * userHeight) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            bmiResult.innerHTML = `Under Weight. <br> <span>Your BMI: ${bmi}</span>`;
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            bmiResult.innerHTML = `Normal. <br> <span>Your BMI: ${bmi}</span>`;
        }
        else {
            bmiResult.innerHTML = `Over Weight. <br> <span>Your BMI: ${bmi}</span>`;
        }

        userHeightInput.value = '';
        userWeightInput.value = '';
        userAgeInput.value = '';
    }
};