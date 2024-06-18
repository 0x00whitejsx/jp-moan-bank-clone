// const tl = gsap.timeline()
//   .set('svg', {opacity:1})
//   .set('.scratches', {rotation:70, x:450, y:-10})
//   .set('#tri2', {scale:0.5})
//   .from('#cardMask rect', {scale:0, rotation:-20, duration:2, transformOrigin:'50% 50%', ease:'expo.inOut'}, 0)
//   .to('#tri1', {motionPath: {
//       path: "#midC",
//       align: "#midC",
//       alignOrigin: [0.5,0.5],
//       autoRotate: true,
//       start: 1,
//       end: 0
//     }, duration:6, repeat:-1, ease:'none', repeatDelay:1}, 0.5)
//   .to('#tri2', {motionPath: {
//       path: "#innerC",
//       align: "#innerC",
//       alignOrigin: [0.5,0.5],
//       autoRotate: true,
//       start: 0,
//       end: 1
//     }, duration:5, repeat:-1, ease:'none', repeatDelay:1}, 1.5)
//   .from('.coil', {attr:{'stroke-dashoffset':(i)=>(i==1)?-28:28}, ease:'none', duration:1, repeat:-1}, 1)
//   .fromTo('#orb1', {y:160}, {y:-20, ease:'circ', repeat:-1, yoyo:true, duration:1}, 0.8)
//   .from('.logoPt', {x:(i)=>[18,-10][i], duration:1.2, ease:'expo.inOut'}, 0.9)
//   .from('svg text', {x:-40, duration:1.1, ease:'expo.inOut', stagger:0.2}, 1)
//   .from('.txtBox', {scaleX:0, transformOrigin:'100% 0', duration:1.1, ease:'expo.inOut', stagger:0.2}, 1)
//   .fromTo('#wave1', {x:0, y:0},{duration:5, x:-701, y:815, repeat:-1, ease:'none'}, 0)
//   .fromTo('#wave2', {x:0, y:0},{duration:6, x:804, y:-917, repeat:-1, ease:'none', onRepeat:()=>starShine.play(0)}, 0)

// starShine = gsap.timeline()
//   .set('#star', {scale:0, transformOrigin:'50% 50%', x:2, y:10})
//   .to('#star', {scale:1, repeat:1, yoyo:true, yoyoEase:true, duration:0.4, ease:'power4'}, 0)
//   .fromTo('#star', {rotate:-20},{rotate:120, duration:0.8, ease:'none'}, 0)

// window.onclick =()=> tl.play(0);



    document.addEventListener('DOMContentLoaded', function () {
        // Get the modal
        var modal = document.getElementById('sendModal');

        // Close modal when clicking outside the modal content
        modal.addEventListener('click', function (event) {
            if (event.target === modal || event.target.classList.contains('modal-close')) {
                modal.classList.remove('is-active');
            }
        });

        // Prevent modal from closing when clicking inside the modal content
        modal.querySelector('.modal-content').addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });



    document.addEventListener('DOMContentLoaded', function () {
        const transactionModal = document.getElementById('transactionModal');
        const transactionIdSpan = document.getElementById('transactionId');
        const transactionTypeSpan = document.getElementById('transactionType');
        const transactionAmountSpan = document.getElementById('transactionAmount');
        const transactionDateSpan = document.getElementById('transactionDate');
        const transactionTimeSpan = document.getElementById('transactionTime');
        const payerIdSpan = document.getElementById('payerId');
        const senderIdSpan = document.getElementById('senderId');
      
        // Example transaction data (replace with actual data retrieval logic)
        const transactionData = {
          id: '123456789',
          type: 'Receive',
          amount: '$100.00',
          date: '2024-06-18',
          time: '14:30:00',
          payerId: 'payer123',
          senderId: 'sender456'
          // Add more data fields as needed
        };
      
        // Function to open modal and populate data
        function openTransactionModal(data) {
          transactionIdSpan.textContent = data.id;
          transactionTypeSpan.textContent = data.type;
          transactionAmountSpan.textContent = data.amount;
          transactionDateSpan.textContent = data.date;
          transactionTimeSpan.textContent = data.time;
          payerIdSpan.textContent = data.payerId;
          senderIdSpan.textContent = data.senderId;
      
          transactionModal.classList.add('is-active');
        }
      
        // Event listener for opening modal when clicking the receive link
        document.getElementById('receiveLink').addEventListener('click', function (event) {
          event.preventDefault(); // Prevent the link from navigating
      
          openTransactionModal(transactionData); // Pass your transaction data here
        });
      
        // Close modal functionality
        transactionModal.querySelector('.delete').addEventListener('click', function () {
          transactionModal.classList.remove('is-active');
        });
      
        transactionModal.querySelector('.modal-background').addEventListener('click', function () {
          transactionModal.classList.remove('is-active');
        });
      
        // Example: Save changes button functionality (customize as per your needs)
        transactionModal.querySelector('.is-success').addEventListener('click', function () {
          // Implement save changes logic here
          console.log('Changes saved.');
          transactionModal.classList.remove('is-active');
        });
      
        // Example: Cancel button functionality
        transactionModal.querySelector('.button').addEventListener('click', function () {
          transactionModal.classList.remove('is-active');
        });
      });