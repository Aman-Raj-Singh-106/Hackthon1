function trackFIR() {
    const firId = document.getElementById('fir-id').value.trim();
    const resultDiv = document.getElementById('result');
    
    if (!firId) { 
        alert("Please enter a valid FIR number!");
        return;
    }
      
    setTimeout(() => {
        const mockData = {
            id: firId,
            date: "15-01-2025",
            status: Math.random() > 0.5 ? "Resolved" : "Under Investigation",
            officer: "IO Rajesh Kumar",
            updated: "20-03-2025"
        };
        
        document.getElementById('display-id').textContent = mockData.id;
        document.getElementById('display-date').textContent = mockData.date;
        document.getElementById('display-status').textContent = mockData.status;
        document.getElementById('display-officer').textContent = mockData.officer;
        document.getElementById('display-updated').textContent = mockData.updated;
        
        const statusElement = document.getElementById('display-status');
        statusElement.className = mockData.status === "Resolved" ? "status-resolved" : "status-pending";
        

        resultDiv.style.display = "block";
    }, 1000);
}
