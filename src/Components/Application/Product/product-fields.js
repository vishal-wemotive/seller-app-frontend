import { PRODUCT_CATEGORY} from "../../../utils/constants";

const productFields = [
    {
      id: "productCode",
      title: "Product Code",
      placeholder: "Product code",
      type: "input",
      required: true,
    },
    {
      id: "productName",
      title: "Product name",
      placeholder: "Product name",
      type: "input",
      required: true,
    },
    {
      id: "MRP",
      title: "MRP",
      placeholder: "MRP",
      type: "number",
      required: true,
      valueInDecimal: true
    },
    {
      id: "retailPrice",
      title: "Retail price",
      placeholder: "Retail price",
      type: "number",
      required: true,
      valueInDecimal: true
    },
    {
      id: "purchasePrice",
      title: "Purchase price",
      placeholder: "Purchase price",
      type: "number",
      required: true,
      valueInDecimal: true
    },
    {
      id: "HSNCode",
      title: "HSN code",
      placeholder: "HSN code",
      type: "input",
      required: true,
    },
    {
      id: "GST_Percentage",
      title: "GST Percentage",
      placeholder: "GST Percentage",
      type: "select",
      options: [
        { key: "5", value: 5 },
        { key: "12", value: 12 },
        { key: "18", value: 18 },
        { key: "28", value: 28 },
      ],
      required: true,
    },
    {
      id: "productCategory",
      title: "Product category",
      placeholder: "Product category",
      options: Object.entries(PRODUCT_CATEGORY).map(([key, value]) => {
        return { key: value, value: key}
      }),
      type: "select",
      required: true,
    },
    {
      id: "productSubcategory1",
      title: "Product subcategory",
      placeholder: "Please select product category",
      options: [],
      type: "select",
      required: true,
    }
    
    
    
    


    ,
    {
      id: "manufacturerOrPackerName",
      title: "Manufacturer Or Packer Name",
      placeholder: "Manufacturer Or Packer Name",
      type: "input",
      required: true,
    },
    {
      id: "manufacturerOrPackerAddress",
      title: "Manufacturer Or Packer Address",
      placeholder: "Manufacturer Or Packer Address",
      type: "input",
      required: true,
    },
    {
      id: "commonOrGenericNameOfCommodity",
      title: "Common Or Generic Name Of Commodity",
      placeholder: "commonOr Generic Name Of Commodity",
      type: "input",
      required: true,
    },
    {
      id: "monthYearOfManufacturePackingImport",
      title: "Month Year Of Manufacture Packing Import",
      placeholder: "Month YearOf Manufacture Packing Import",
      type: "date-picker",
      required: true,
      format: "MM/YYYY",
      views: ['year', 'month']
    },
    {
      id: "importerFSSAILicenseNo",
      title: "Importer FSSAI License No",
      placeholder: "Importer FSSAI License No",
      type: "input",
      required: true,
    },
    {
      id: "brandOwnerFSSAILicenseNo",
      title: "Brand Owner FSSAI License No",
      placeholder: "Brand Owner FSSAI License No",
      type: "input",
      required: true,
    }
    
    
    
    
    
    
    ,
    {
      id: "quantity",
      title: "Quantity",
      placeholder: "Quantity",
      type: "number",
      required: true,
    },
    {
      id: "barcode",
      title: "Barcode",
      placeholder: "Barcode",
      type: "number",
      maxLength: 12,
      required: true,
    },
    {
      id: "maxAllowedQty",
      title: "Max allowed quantity",
      placeholder: "Max allowed quantity",
      type: "number",
      required: true,
      min: 1
    },
    {
      id: "UOM",
      title: "UOM",
      placeholder: "UOM",
      type: "input",
      required: true,
    },
    {
      id: "packQty",
      title: "Pack quantity",
      placeholder: "Pack quantity",
      type: "number",
      required: true,
    },
    {
      id: "length",
      title: "Length",
      placeholder: "Length",
      type: "input",
      required: true,
    },
    {
      id: "breadth",
      title: "Breadth",
      placeholder: "Breadth",
      type: "input",
      required: true,
    },
    {
      id: "height",
      title: "Height",
      placeholder: "Height",
      type: "input",
      required: true,
    },
    {
      id: "weight",
      title: "Weight",
      placeholder: "Weight",
      type: "input",
      required: true,
    },
    {
      id: "returnWindow",
      title: "Return Window (in hours)",
      placeholder: "Return Window (in hours)",
      type: "number",
      required: true,
    },
    {
      id: "manufacturerName",
      title: "Manufacturer name",
      placeholder: "Manufacturer name",
      type: "input",
      required: true,
    },
    {
      id: "manufacturedDate",
      title: "Manufactured date",
      placeholder: "Manufactured date",
      type: "date-picker",
      required: true,
    },
    {
      id: "nutritionalInfo",
      title: "Nutritional info",
      placeholder: "Nutritional info",
      type: "input",
      required: true,
    },
    {
      id: "additiveInfo",
      title: "Additive info",
      placeholder: "Additive info",
      type: "input",
      required: true,
    },
    {
      id: "instructions",
      title: "Instructions",
      placeholder: "Instructions",
      type: "input",
      required: true,
    },
    {
      id: "longDescription",
      title: "Long description",
      placeholder: "Long description",
      type: "input",
      required: true,
    },
    {
      id: "description",
      title: "Short description",
      placeholder: "Short description",
      type: "input",
      required: true,
    },
    {
      id: "isCancellable",
      title: "Cancellable",
      type: "radio",
      options: [
        { key: "Yes", value: true },
        { key: "No", value: false },
      ],
      required: true,
    },
    {
      id: "isReturnable",
      title: "Returnable",
      type: "radio",
      options: [
        { key: "Yes", value: true },
        { key: "No", value: false },
      ],
      required: true,
    },
    {
      id: "isVegetarian",
      title: "Vegetarian",
      type: "radio",
      options: [
        { key: "Yes", value: true },
        { key: "No", value: false },
      ],
      required: true,
    },
    {
      id: "availableOnCod",
      title: "Available on Cash on delivery",
      type: "radio",
      options: [
        { key: "Yes", value: true },
        { key: "No", value: false },
      ],
      required: true,
    },
    {
      id: "images",
      title: "Images (Multiple file selection allowed, maximum size of 2Mb for each file )",
      type: "upload",
      multiple: true,
      file_type: "product_image",
      required: true,
    },
];

export default productFields