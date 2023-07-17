const readline = require('readline');

function checkQualification() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Date of birth (YYYY-MM-DD): ', (dob) => {
    rl.question('Is from East London? (yes/no): ', (isFromEastLondon) => {
      const age = calculateAge(dob);
      const isQualified = isQualifiedCandidate(age, isFromEastLondon);

      if (isQualified) {
        console.log('Qualified');
      } else {
        console.log('Not Qualified');
      }

      rl.close();
    });
  });
}

function calculateAge(dob) {
  const birthDate = new Date(dob);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  const birthMonth = birthDate.getMonth();
  const currentMonth = currentDate.getMonth();
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

function isQualifiedCandidate(age, isFromEastLondon) {
  const isQualifiedAge = age >= 18;
  const isQualifiedLocation = isFromEastLondon.toLowerCase() === 'yes';

  return isQualifiedAge && isQualifiedLocation;
}

checkQualification();
