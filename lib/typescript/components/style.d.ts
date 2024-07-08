declare const styles: {
    dropdownInputContainer: {
        borderRadius: number;
        borderWidth: number;
        overflow: "hidden";
    };
    focusedDropdownInputContainer: {
        borderBottomStartRadius: number;
        borderBottomEndRadius: number;
    };
    dropdownToggler: {
        justifyContent: "center";
        height: number;
        paddingHorizontal: number;
    };
    dropdownText: {
        fontFamily: string;
        fontSize: number;
        color: string;
    };
    activeDropdownText: {
        color: string;
    };
    iconContainer: {
        position: "absolute";
        paddingHorizontal: number;
        zIndex: number;
        right: number;
        height: "100%";
        alignItems: "center";
        justifyContent: "center";
    };
    dropdownList: {
        display: "none";
        position: "absolute";
        top: number;
        right: number;
        left: number;
        zIndex: number;
        backgroundColor: string;
        borderBottomLeftRadius: number;
        borderBottomRightRadius: number;
        borderWidth: number;
        borderTopWidth: number;
        overflow: "hidden";
    };
    openDropdownList: {
        display: "flex";
    };
    dropdownItem: {
        backgroundColor: string;
        paddingHorizontal: number;
        height: number;
        justifyContent: "center";
    };
    activeDropdownItem: {
        backgroundColor: string;
    };
    dropdownItemText: {
        fontFamily: string;
        fontSize: number;
        color: string;
    };
    activeDropdownItemText: {
        color: string;
    };
};
export default styles;
//# sourceMappingURL=style.d.ts.map