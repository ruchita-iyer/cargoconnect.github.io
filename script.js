document.addEventListener('DOMContentLoaded', function() {
    const trackButton = document.getElementById('trackButton');
    const trackingCodeInput = document.getElementById('trackingCode');
    const trackingResult = document.getElementById('trackingResult');

    trackButton.addEventListener('click', function() {
        const trackingCode = trackingCodeInput.value;
        const trackingData = getTrackingData(trackingCode);

        if (trackingData) {
            displayTrackingResult(trackingData);
        } else {
            trackingResult.textContent = 'Tracking code not found.';
        }
    });

    function getTrackingData(trackingCode) {
        // Hardcoded tracking data with item details for demonstration purposes
        const trackingDatabase = {
            'ABC123': {
                trackingid:'ABC123',
                date:'12-Aug-2023',
                status: 'In Transit',
                items: [
                    { name: 'Box of Electronics', quantity: 2 },
                    { name: 'Pallet of Books', quantity: 5 },
                ],
            },
            'XYZ789': {
                trackingid:'XYZ789',
                date:'26-July-2023',
                status: 'Delivered',
                items: [
                    { name: 'Furniture Set', quantity: 1 },
                ],
            },
            '123456': {
                trackingid:'123456',
                date:'10-Sept-2023',
                status: 'Out for Delivery',
                items: [
                    { name: 'Clothing Shipment', quantity: 3 },
                ],
            },
        };

        return trackingDatabase[trackingCode];
    }

    function displayTrackingResult(trackingData) {
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                <th>Tracking Id</th>
                <th>Date of Order</th>
                    <th>Status</th>
                    <th>Item</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td rowspan="${trackingData.items.length + 1}">${trackingData.trackingid}</td>
                    <td rowspan="${trackingData.items.length + 1}">${trackingData.date}</td>
                    <td rowspan="${trackingData.items.length + 1}">${trackingData.status}</td>
                </tr>
                
                ${trackingData.items.map(item => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    
        trackingResult.innerHTML = '';
        trackingResult.appendChild(table);
    }
});
