import { HTMLText } from '../src/HTMLText';
import { HTMLTextStyle } from '../src/HTMLTextStyle';

describe('HTMLText', () =>
{
    it('should create an HTMLText element', () =>
    {
        const text = new HTMLText('Hello World');

        expect(text).toBeTruthy();
        expect(text.text).toBe('Hello World');

        text.destroy();
    });

    it('should clean up the shadow element', () =>
    {
        const query = '[data-pixi-html-text]';

        expect(document.querySelector(query)).toBeFalsy();

        const text = new HTMLText('Hello world!');

        expect(document.querySelector(query)).toBeTruthy();

        text.destroy();

        expect(document.querySelector(query)).toBeFalsy();
    });

    it('should clean up the shadow element multiples', () =>
    {
        const query = '[data-pixi-html-text]';

        expect(document.querySelector(query)).toBeFalsy();

        const text = new HTMLText('Hello world!');
        const text2 = new HTMLText('Hello world2!');

        expect(document.querySelector(query)).toBeTruthy();

        text.destroy();
        text2.destroy();

        expect(document.querySelector(query)).toBeFalsy();
    });

    describe('measureText', () =>
    {
        it('should measure default text', () =>
        {
            const text = new HTMLText('Hello world!');
            const size = text.measureText();

            expect(size).toBeTruthy();
            expect(size.width).toBeGreaterThan(0);
            expect(size.height).toBeGreaterThan(0);

            text.destroy();
        });

        it('should measure empty text to be drawable', () =>
        {
            const text = new HTMLText();
            const size = text.measureText({ text: '' });

            expect(size).toBeTruthy();
            expect(size.width).toBe(0);
            expect(size.height).toBe(0);

            text.destroy();
        });

        it('should measure override text', () =>
        {
            const text = new HTMLText();
            const size = text.measureText({ text: 'Hello world!' });

            expect(size).toBeTruthy();
            expect(size.width).toBeGreaterThan(0);
            expect(size.height).toBeGreaterThan(0);

            text.destroy();
        });

        it('should measure with resolution', () =>
        {
            const text = new HTMLText('Hello world!');
            const size = text.measureText();
            const size2 = text.measureText({ resolution: 2 });

            expect(Math.abs((size2.width / 2) - size.width)).toBeLessThanOrEqual(1);
            expect(Math.abs((size2.height / 2) - size.height)).toBeLessThanOrEqual(1);
            text.destroy();
        });

        it('should apply override style', () =>
        {
            const text = new HTMLText('Hello world!', {
                fontSize: 12,
            });
            const style = new HTMLTextStyle({
                fontSize: 24,
            });
            const size = text.measureText();
            const size2 = text.measureText({ style });

            expect(Math.abs((size2.width / 2) - size.width)).toBeLessThanOrEqual(1);
            expect(Math.abs((size2.height / 2) - size.height)).toBeLessThanOrEqual(1);
            text.destroy();
        });

        it('should apply override style without touching styleID', () =>
        {
            const text = new HTMLText('Hello world!');
            const styleId = text.style.styleID;
            const style = new HTMLTextStyle();
            const style2Id = style.styleID;

            text.measureText();
            text.measureText({ style });
            expect(styleId).toBe(text.style.styleID);
            expect(style2Id).toBe(style.styleID);
            text.destroy();
        });
    });
});
