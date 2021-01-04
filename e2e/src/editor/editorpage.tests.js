describe('editorPage: ', function(){  
    var username, password, loginButton;
    //browser.waitForAngularEnabled = false;
    beforeEach(async function() {
        browser.waitForAngularEnabled(true);
        browser.driver.manage().deleteAllCookies();
        browser.get('#/login/:formId/:page/:edit/:published');
        browser.waitForAngularEnabled(false);
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});
        username = element(by.css("input[formControlName=email]"))
        password = element(by.css('input[formControlName=password]'));
        loginButton = element(by.css(".class1558539317253"));

        
        username.sendKeys('charlesg@convertigo.com');
        password.sendKeys('password');
        
        loginButton.click().then(async function() {
            await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                }, 4000)
            });
        });
            
    });

    it('should validate the create a new form and test of checkbox ', async function() {
        browser.waitForAngularEnabled(false);
        /**** On page selector ****/

        /**  get createform button, inputNameForm button and registerbutton **/
        var createButton = element(by.css(".class1571076173386")); 
        

        /** Click on create a new form button */
        await createButton.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});
        var inputName = element(by.css(".alert-input"));
        var registerButton = element(by.buttonText('Enregistrer'));
        /** Check that popup creation is displayed */
        expect(element(by.css('.alert-wrapper')).isPresent()).toBeTruthy("alert is not visible to create a new form");

        /** Type new form name and validate */
        inputName.sendKeys('testing_protractor_'+(new Date()).getTime());
        await registerButton.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /**** On page editor ****/

        /** Check that we are on the expected page */
        let url = await browser.getCurrentUrl()
        url = url.replace(/%3/g, ":");
        expect(url).toContain('/editor/');
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /** Get checkbox element to drag and zone to drop */
        let checkbox = element(by.css(".class1568037324759"));
        let afterItem = element(by.css(".class1568026826437"));
        
        /** Perform drag and drop */
        const dnd = require('html-dnd').code;
        browser.executeScript(dnd, checkbox.getWebElement(), afterItem.getWebElement());

        /**get first checkbox of the form and click */
        let checkboxDragged = element(by.id("@prefixc8oitemcheckbox1@prefixc8otypecheckbox"));
        await checkboxDragged.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /** Get first input option and write to it a new value */
        var ion_input = element.all(by.css(".class1571235603023")).get(0);
        let input  = ion_input.element(by.css(".text-input"));
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});
        input.sendKeys('newValue');      

        /** Close checkbox edition mode by clicking into validate button */
        let validate = element(by.css(".class1571844772937"));
        await validate.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /** Check that value typed is still there */
        let value = element.all(by.css(".class1570465489468")).get(0);
        expect(value.getText()).toBe("Checkbox 1newValue");
        
        /**get first checkbox of the form and click */
        await checkboxDragged.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /** Get second checkbox option and unselect it by clicking on it */
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});
        var checkboxOption = element.all(by.css(".class1571231839374")).get(1);
        let button_inner  = checkboxOption.element(by.css(".button-inner"))
        await button_inner.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /** Close checkbox edition mode by clicking into validate button */
        await validate.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 3000)});

        /** Check that checkbox1 is selected and checkbox2 is not selected */
        var checked0 = element.all(by.css(".class1571233167142")).get(0)
        var checked1 = element.all(by.css(".class1571233167142")).get(1)
        //checkbox-icon checkbox-checked
        var checked0Child = checked0.element(by.css(".checkbox-checked"));
        expect(checked0Child.isPresent()).toBeTruthy("1");
        var checked1Child = checked1.element(by.css(".checkbox-checked"));
        expect(checked1Child.isPresent()).toBeFalsy();
        var checked1ChildB = checked1.element(by.css(".checkbox-icon"));
        expect(checked1ChildB.isPresent()).toBeTruthy("2");

        /** Get first checkbox of the form and click */
        await checkboxDragged.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /** Create two new Options */
        var button_add_option = element(by.css(".class1571238427710"));
        button_add_option.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});
        button_add_option.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /** Get first input option and write to it a new value */
        var ion_input2 = element.all(by.css(".class1571235603023")).get(2);
        var ion_input3 = element.all(by.css(".class1571235603023")).get(3);
        let input2 = ion_input2.element(by.css(".text-input"));
        let input3 = ion_input3.element(by.css(".text-input"));
        expect(input2.getAttribute('value')).toBe("Checkbox 1", "input at index 2 should have 'Checkbox 1' as value");
        expect(input3.getAttribute('value')).toBe("Checkbox 3", "input at index 3 should have 'Checkbox 3' as value");

        /** Create a new "Other" and check its presence*/
        var button_add_other = element(by.css(".class1571238527183"));
        button_add_other.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});
        var input_other = element(by.css(".class1571239540119"));
        expect(input_other.isPresent()).toBeTruthy("Input Other is not visible");

        /** Delete a option at index 2 and check its presence*/
        var button_delete = element.all(by.css(".class1571237261234")).get(2);
        button_delete.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});
        ion_input2 = element.all(by.css(".class1571235603023")).get(2);
        expect(input2.getAttribute('value')).toBe("Checkbox 3", "input at index 2 should now have 'Checkbox 3' as value");

        /** Close checkbox edition mode by clicking into validate button */
        await validate.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 3000)});


        expect(element.all(by.css(".class1570465489465")).count()).toBe(3);
        expect(element.all(by.css(".class1571242307012")).count()).toBe(1);
        //browser.sleep(1000000);
    })



    it('should validate the create a new form and test of radioList ', async function() {
        browser.waitForAngularEnabled(false);
        /**** On page selector ****/

        /**  get createform button, inputNameForm button and registerbutton **/
        var createButton = element(by.css(".class1571076173386")); 
        

        /** Click on create a new form button */
        await createButton.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});
        var inputName = element(by.css(".alert-input"));
        var registerButton = element(by.buttonText('Enregistrer'));
        /** Check that popup creation is displayed */
        expect(element(by.css('.alert-wrapper')).isPresent()).toBeTruthy("alert is not visible to create a new form");

        /** Type new form name and validate */
        inputName.sendKeys('testing_protractor_'+(new Date()).getTime());
        await registerButton.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /**** On page editor ****/

        /** Check that we are on the expected page */
        let url = await browser.getCurrentUrl()
        url = url.replace(/%3/g, ":");
        expect(url).toContain('/editor/');
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /** Get checkbox element to drag and zone to drop */
        let checkbox = element(by.css(".class1568037324792"));
        let afterItem = element(by.css(".class1568026826437"));
        
        /** Perform drag and drop */
        const dnd = require('html-dnd').code;
        browser.executeScript(dnd, checkbox.getWebElement(), afterItem.getWebElement());
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 3000)});

        /**get first checkbox of the form and click */
        
        let checkboxDragged = element(by.id("@prefixc8oitemradiolist1@prefixc8otyperadio"));
        await checkboxDragged.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /** Get first input option and write to it a new value */
        var ion_input = element.all(by.css(".class1571315736599")).get(0);
        let input  = ion_input.element(by.css(".text-input"));
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});
        input.sendKeys('newValue');      

        /** Close checkbox edition mode by clicking into validate button */
        let validate = element(by.css(".class1571844772937"));
        await validate.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /** Check that value typed is still there */
        let value = element.all(by.css(".class1570521482268")).get(0);
        expect(value.getText()).toBe("Option 1newValue");
        
        /**get first checkbox of the form and click */
        await checkboxDragged.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /** Get second checkbox option and unselect it by clicking on it */
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});
        var checkboxOption = element.all(by.css(".class1571315626911")).get(1);
        let button_inner  = checkboxOption.element(by.css(".button-inner"))
        await button_inner.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /** Close checkbox edition mode by clicking into validate button */
        await validate.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 3000)});

        /** Check that checkbox1 is selected and checkbox2 is not selected */
        var checked0 = element.all(by.css(".class1570521482286")).get(0)
        var checked1 = element.all(by.css(".class1570521482286")).get(1)
        //checkbox-icon checkbox-checked
        var checked0Child = checked0.element(by.css(".radio-checked"));
        var checked0ChildB = checked0.element(by.css(".radio-icon"));
        expect(checked0Child.isPresent()).toBeFalsy("1");
        expect(checked0ChildB.isPresent()).toBeTruthy("1");
        var checked1Child = checked1.element(by.css(".radio-checked"));
        expect(checked1Child.isPresent()).toBeTruthy("default checked feature not working");
        var checked1ChildB = checked1.element(by.css(".radio-icon"));
        expect(checked1ChildB.isPresent()).toBeTruthy("2");

        /** Get first checkbox of the form and click */
        await checkboxDragged.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /** Create two new Options */
        var button_add_option = element(by.css(".class1571316011530"));
        button_add_option.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});
        button_add_option.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});

        /** Get first input option and write to it a new value */
        var ion_input2 = element.all(by.css(".class1571315736599")).get(2);
        var ion_input3 = element.all(by.css(".class1571315736599")).get(3);
        let input2 = ion_input2.element(by.css(".text-input"));
        let input3 = ion_input3.element(by.css(".text-input"));
        expect(input2.getAttribute('value')).toBe("Option 1", "input at index 2 should have 'Checkbox 1' as value");
        expect(input3.getAttribute('value')).toBe("Option 3", "input at index 3 should have 'Checkbox 3' as value");

        /** Create a new "Other" and check its presence*/
        /*var button_add_other = element(by.css(".class1571238527183"));
        button_add_other.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});
        var input_other = element(by.css(".class1571239540119"));
        expect(input_other.isPresent()).toBeTruthy("Input Other is not visible");

        /** Delete a option at index 2 and check its presence*/
        var button_delete = element.all(by.css(".class1571315594187")).get(2);
        button_delete.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 1000)});
        ion_input2 = element.all(by.css(".class1571235603023")).get(2);
        expect(input2.getAttribute('value')).toBe("Option 3", "input at index 2 should now have 'Option 3' as value");

        /** Close checkbox edition mode by clicking into validate button */
        await validate.click();
        await new Promise((resolve)=>{setTimeout(()=>{resolve();}, 3000)});


        expect(element.all(by.css(".class1570521482265")).count()).toBe(3);
        //browser.sleep(1000000);
    })

    
    
   
});