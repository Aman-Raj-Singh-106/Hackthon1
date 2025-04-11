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
        
        // Mock user data - in real app this would come from Aadhaar verification API
        const mockUserData = {
            name: "Rahul Sharma",
            phone: "9876543210",
            address: "Flat 201, Sunshine Apartments, Mumbai - 400001",
            aadhaar: "123456789012"
        };

        // Step 1: Aadhaar Verification
        aadhaarForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const aadhaarNumber = document.getElementById('aadhaar-number').value;
            
            // Simulate API call with setTimeout
            setTimeout(() => {
                // Update user details in step 2
                document.getElementById('user-name').textContent = mockUserData.name;
                document.getElementById('user-phone').textContent = mockUserData.phone;
                document.getElementById('user-address').textContent = mockUserData.address;
                document.getElementById('user-aadhaar').textContent = aadhaarNumber;
                
                // Show step 2
                step1Content.classList.add('d-none');
                step2Content.classList.remove('d-none');
                
                // Update step indicator
                step1Indicator.classList.remove('active');
                step1Indicator.classList.add('completed');
                step2Indicator.classList.add('active');
            }, 1000);
        });

        // Step 2: Back button
        backToStep1Btn.addEventListener('click', function() {
            step2Content.classList.add('d-none');
            step1Content.classList.remove('d-none');
            
            // Update step indicator
            step2Indicator.classList.remove('active');
            step1Indicator.classList.add('active');
            step1Indicator.classList.remove('completed');
        });

        // Step 2: Incident Details Submission
        incidentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show step 3
            step2Content.classList.add('d-none');
            step3Content.classList.remove('d-none');
            
            // Update step indicator
            step2Indicator.classList.remove('active');
            step2Indicator.classList.add('completed');
            step3Indicator.classList.add('active');
            
            // Set FIR details
            const now = new Date();
            document.getElementById('fir-date').textContent = 
                `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
        });

        // Step 3: Download FIR
        document.getElementById('download-fir')?.addEventListener('click', function() {
            alert('FIR download functionality would be implemented here');
        });

        // Step 3: New FIR
        document.getElementById('new-fir')?.addEventListener('click', function() {
            // Reset forms
            aadhaarForm.reset();
            incidentForm.reset();
            
            // Show step 1
            step3Content.classList.add('d-none');
            step1Content.classList.remove('d-none');
            
            // Reset step indicator
            step3Indicator.classList.remove('active');
            step1Indicator.classList.add('active');
            step2Indicator.classList.remove('completed');
        });
    }

    // Form validation for Aadhaar number
    const aadhaarInput = document.getElementById('aadhaar-number');
    if (aadhaarInput) {
        aadhaarInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, ''); // Allow only numbers
            if (this.value.length > 12) {
                this.value = this.value.slice(0, 12);
            }
        });
    }

    // Form validation for pincode
    const pincodeInput = document.getElementById('location-pincode');
    if (pincodeInput) {
        pincodeInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, ''); // Allow only numbers
            if (this.value.length > 6) {
                this.value = this.value.slice(0, 6);
            }
        });
    }
});
