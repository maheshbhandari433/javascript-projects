let distance, time;

while (distance != 0) {
    distance = Number(prompt('Enter distance in km'));
    if (distance == 0) {
        console.log('distance is zero.' );
        break;
    }
    time = Number(prompt('Enter  time in hours'));
    let average = distance / time;
    console.log('Average is', average);
}

