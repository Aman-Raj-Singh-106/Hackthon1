document.addEventListener('DOMContentLoaded', function() {
    // FIR Filing Form Logic
    if (document.getElementById('aadhaar-form')) {
        const aadhaarForm = document.getElementById('aadhaar-form');
        const incidentForm = document.getElementById('incident-form');
        const step1Content = document.getElementById('step1-content');
        const step2Content = document.getElementById('step2-content');
        const step3Content = document.getElementById('step3-content');
        const backToStep1Btn = document.getElementById('back-to-step1');
        const step1Indicator = document.getElementById('step1');
        const step2Indicator = document.getElementById('step2');
        const step3Indicator = document.getElementById('step3');
        

        const mockUserData = {
            name: "Aman Raj Singh",
            phone: "6206505309",
            address: "Flat 201, Sunshine Apartments, Jamshedpur - 831001",
            aadhaar: "556445978381"
        };

        // Aadhaar Verification
        aadhaarForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const aadhaarNumber = document.getElementById('aadhaar-number').value;
            
            setTimeout(() => {
                // Update user details
                document.getElementById('user-name').textContent = mockUserData.name;
                document.getElementById('user-phone').textContent = mockUserData.phone;
                document.getElementById('user-address').textContent = mockUserData.address;
                document.getElementById('user-aadhaar').textContent = aadhaarNumber;
                
                step1Content.classList.add('d-none');
                step2Content.classList.remove('d-none');
                
                step1Indicator.classList.remove('active');
                step1Indicator.classList.add('completed');
                step2Indicator.classList.add('active');
            }, 1000);
        });

        backToStep1Btn.addEventListener('click', function() {
            step2Content.classList.add('d-none');
            step1Content.classList.remove('d-none');
            
            step2Indicator.classList.remove('active');
            step1Indicator.classList.add('active');
            step1Indicator.classList.remove('completed');
        });

        incidentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            step2Content.classList.add('d-none');
            step3Content.classList.remove('d-none');
            
            step2Indicator.classList.remove('active');
            step2Indicator.classList.add('completed');
            step3Indicator.classList.add('active');
            
            const now = new Date();
            document.getElementById('fir-date').textContent = 
                `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
        });

        document.getElementById('download-fir')?.addEventListener('click', function() {
            alert('FIR download functionality would be implemented here');
        });

        document.getElementById('new-fir')?.addEventListener('click', function() {
            aadhaarForm.reset();
            incidentForm.reset();
            
            step3Content.classList.add('d-none');
            step1Content.classList.remove('d-none');
            
            step3Indicator.classList.remove('active');
            step1Indicator.classList.add('active');
            step2Indicator.classList.remove('completed');
        });
    }

    const aadhaarInput = document.getElementById('aadhaar-number');
    if (aadhaarInput) {
        aadhaarInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '');
            if (this.value.length > 12) {
                this.value = this.value.slice(0, 12);
            }
        });
    }

    const pincodeInput = document.getElementById('location-pincode');
    if (pincodeInput) {
        pincodeInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '');
            if (this.value.length > 6) {
                this.value = this.value.slice(0, 6);
            }
        });
    }
});
