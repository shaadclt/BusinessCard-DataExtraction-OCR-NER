# Business Card Data Extraction with OCR and NER

This project aims to extract structured data from business cards using a combination of OpenCV, PyTesseract, and spaCy. By leveraging computer vision techniques, optical character recognition (OCR) and natural language processing (NLP), we can automate the process of extracting key information such as name, phone number, email address, and company name from business cards.

## Prerequisites

Before getting started, make sure you have the following dependencies installed:

- Python 3.x
- OpenCV
- PyTesseract
- spaCy
- spaCy English language model

You can install the necessary Python packages by running the following command:

```
pip install -r requirements_app.txt
```

## Usage

1. Clone this repository to your local machine:

```
git clone https://github.com/shaadclt/BusinessCard-DataExtraction-OCR-NER.git
```

2. Run the `app.py` script:

```
python app.py
```

3. The extracted data will be displayed on the console.

## How It Works

1. **Image Preprocessing**: The business card image is loaded using OpenCV. We apply various preprocessing techniques such as resizing, grayscale conversion, and noise reduction to improve OCR accuracy.

2. **Text Extraction**: We utilize PyTesseract, a powerful OCR engine, to extract the text from the preprocessed image.

3. **Text Analysis**: The extracted text is then processed using spaCy for natural language processing. We perform entity recognition to identify key information such as names, phone numbers, email addresses, and company names.

4. **Data Extraction**: Using regular expressions and pattern matching, we extract the relevant data from the analyzed text.

5. **Data Presentation**: The extracted data is printed on the console and saved in a CSV file for further analysis and integration with other applications.

## Customization

If you want to customize the data extraction process or add additional features, you can modify the `predictions.py` script according to your requirements. Feel free to experiment with different preprocessing techniques, OCR settings, and NLP strategies to improve the accuracy and efficiency of the data extraction process.

## Contributions

Contributions to this project are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request. Let's work together to make business card data extraction even better!

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for personal and commercial purposes.

## Acknowledgments

This project was inspired by the need for automating data extraction from business cards. Special thanks to the developers of OpenCV, PyTesseract, and spaCy for providing the necessary tools and libraries to make this project possible.

