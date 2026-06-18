import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        backgroundColor: '#1A1F2E',
        borderTopWidth: 1,
        borderTopColor: '#4F6EF7',
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        position: 'relative',
    },
    tabIcon: {
        fontSize: 22,
        marginBottom: 2,
    },
    tabLabel: {
        fontSize: 11,
        color: '#6B7280',
        fontWeight: '500',
    },
    tabLabelActive: {
        color: '#60A5FA',
        fontWeight: '700',
    },
    activeIndicator: {
        position: 'absolute',
        top: -8,
        width: 32,
        height: 3,
        backgroundColor: '#7B5EF8',
        borderRadius: 2,
    }
})