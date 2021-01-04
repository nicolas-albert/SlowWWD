describe('Login page ', function(){  
    var username, password, loginButton;
    //browser.waitForAngularEnabled = false;
    beforeEach(function() {
        browser.waitForAngularEnabled(true);
        browser.driver.manage().deleteAllCookies();
    });

    it('should validate the credentials for a successful login and display selectors view n2', async function() {
        
        browser.get('#/login/:formId/:page/:edit/:published');
        browser.waitForAngularEnabled(false);
        
        username = element(by.css("input[formControlName=email]"))
        password = element(by.css('input[formControlName=password]'));
        loginButton = element(by.css(".class1558539317253"));

        
        username.sendKeys('charlesg@convertigo.com');
        password.sendKeys('password');
        
        loginButton.click().then(async function() {
            await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                }, 3000)
            });
            let url = await browser.getCurrentUrl()
            url = url.replace(/%3/g, ":");
            expect(url).toContain('/selector/:published');
            
            
        })
    })
    
    it('should validate the credentials for a successful login and redirect to editors view', async function() {
        
        browser.get('#/login/1582902144847/editorPage/:edit/:published/:d/:e');
        browser.waitForAngularEnabled(false);
        
        username = element(by.css("input[formControlName=email]"))
        password = element(by.css('input[formControlName=password]'));
        loginButton = element(by.css(".class1558539317253"));

        
        username.sendKeys('charlesg@convertigo.com');
        password.sendKeys('password');
        
        loginButton.click().then(async function() {
            await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                }, 2000)
            });
            let url = await browser.getCurrentUrl()
            url = url.replace(/%3/g, ":");
            expect(url).toContain('/editor/1582902144847');
            
            
        })
    })

    it('should validate the credentials for a successful login and redirect to viewer view', async function() {
        browser.get('#/login/1582902144847/viewerPage/undefined/:published/:d/:e');
        browser.waitForAngularEnabled(false);
        
        username = element(by.css("input[formControlName=email]"))
        password = element(by.css('input[formControlName=password]'));
        loginButton = element(by.css(".class1558539317253"));

        
        username.sendKeys('charlesg@convertigo.com');
        password.sendKeys('password');
        
        loginButton.click().then(async function() {
            await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                }, 2000)
            });
            let url = await browser.getCurrentUrl()
            url = url.replace(/%3/g, ":");
            expect(url).toContain('/viewer/1582902144847');
            
            
        })
    })

    it('should validate the credentials for a successful login and redirect to viewer published view', async function() {
        browser.get('#/login/published_1582902144847/viewerPage/undefined/:published/:d/:e');
        browser.waitForAngularEnabled(false);
        
        username = element(by.css("input[formControlName=email]"))
        password = element(by.css('input[formControlName=password]'));
        loginButton = element(by.css(".class1558539317253"));

        
        username.sendKeys('charlesg@convertigo.com');
        password.sendKeys('password');
        
        loginButton.click().then(async function() {
            await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                }, 2000)
            });
            let url = await browser.getCurrentUrl()
            url = url.replace(/%3/g, ":");
            expect(url).toContain('/viewer/published_1582902144847');
            
            
        })
    })
    it('should validate the credentials are not working and a toast is pushed', async function() {
        browser.get('#/login/published_1572630529402/viewerPage/:edit/:published');
        browser.waitForAngularEnabled(false);
        
        username = element(by.css("input[formControlName=email]"))
        password = element(by.css('input[formControlName=password]'));
        loginButton = element(by.css(".class1558539317253"));

        
        username.sendKeys('charlesg@convertigo.com');
        password.sendKeys('passwordes');
        
        loginButton.click().then(async function() {
            await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                }, 2000)
            });
            let toast = element(by.css('.toast-message'));
            expect(toast.isPresent()).toBeTruthy();
            expect(toast.getText()).toBe("Mot de passe incorrect. Merci de réessayer");
            
            
        })
    })
    
    
});