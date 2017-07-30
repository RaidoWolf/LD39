import RepairCrew from '../RepairCrew/RepairCrew.js';
import Transaction from '../Transaction/Transaction.js';

export default class PowerCompany {

    constructor (name, initialWorth) {

        name = typeof name !== 'undefined' ? name : PowerCompany.generateName();
        initialWorth = typeof initialWorth !== 'undefined' ? initialWorth : 1000000;

    }

    get name                () { return this.m_name;                }
    get grossEarnings       () { return this.m_grossEarnings;       }
    get availableFunds      () { return this.m_availableFunds;      }
    get grossRevenue        () { return this.m_grossRevenue;        }
    get grossLiability      () { return this.m_grossLiability;      }
    get queuedTransactions  () { return this.m_queuedTransactions;  }
    get repairCrewsIdle     () { return this.m_repairCrewsIdle;     }
    get repairCrewsAway     () { return this.m_repairCrewsAway;     }

    set name (value) {
        this.m_name = String(value);
    }

    set grossEarnings (value) {

        value = Number(value);

        if (isNaN(value)) {
            return false;
        }

        if (value < 0) {
            value = 0;
        }

        this.m_grossEarnings = Math.floor(value);

    }

    set availableFunds (value) {

        value = Number(value);

        if (isNaN(value)) {
            return false;
        }

        if (value < 0) {
            value = 0;
        }

        this.m_availableFunds = Math.floor(value);

    }

    set grossRevenue (value) {

        value = Number(value);

        if (isNaN(value)) {
            return false;
        }

        if (value < 0) {
            value = 0;
        }

        this.m_grossRevenue = Math.floor(value);

    }

    set grossLiability (value) {

        value = Number(value);

        if (isNaN(value)) {
            return false;
        }

        if (value < 0) {
            value = 0;
        }

        this.m_grossLiability = Math.floor(value);

    }

    set queuedTransactions (value) {

        if (Array.isArray(value)) {

            for (let i in value) {
                if (!(value[i] instanceof Transaction)) {
                    return false;
                }
            }

            this.m_queuedTransactions = value;

        } else {
            return false;
        }

    }

    set repairCrewsIdle (value) {

        if (Array.isArray(value)) {

            for (let i in value) {
                if (!(value[i] instanceof RepairCrew)) {
                    return false;
                }
            }

            this.m_queuedTransactions = value;

        } else {
            return false;
        }

    }

    set repairCrewsAway (value) {

        if (Array.isArray(value)) {

            for (let i in value) {
                if (!(value[i] instanceof RepairCrew)) {
                    return false;
                }
            }

            this.m_queuedTransactions = value;

        } else {
            return false;
        }

    }

    earn (amount) {

        this.m_queuedTransactions.push(new Transaction(amount));
        return true;

    }

    spend (amount) {

        this.m_queuedTransactions.push(new Transaction(-amount));

    }

}

PowerCompany.prototype.m_name = 'Untitled Power Company';
PowerCompany.prototype.m_grossEarnings = 0;
PowerCompany.prototype.m_availableFunds = 0;
PowerCompany.prototype.m_grossRevenue = 0;
PowerCompany.prototype.m_grossLiability = 0;
PowerCompany.prototype.m_queuedTransactions = null;
PowerCompany.prototype.m_repairCrewsIdle = null;
PowerCompany.prototype.m_repairCrewsAway = null;

PowerCompany.seg1 = [
    '1337',
    'Almighty',
    'Beige',
    'Blue',
    'Chartreuse',
    'Earth',
    'Flamboyant',
    'Furry',
    'Green',
    'Honorable',
    'Imperial',
    'Just',
    'Legit',
    'Lightning',
    'Mega',
    'Retro',
    'Royal',
    'Rusty',
    'Slippery',
    'Speedy',
    'Steam-Powered',
    'Super',
    'The Best',
    'The First',
    'The Last',
    'The Legit',
    'Totally Legit',
    'Treasonous',
    'Undefeatable',
];
PowerCompany.seg2 = [
    'Beach',
    'City',
    'Dave\'s',
    'Destroyer',
    'Empire',
    'Fox','Redneck',
    'Foxes',
    'Fish',
    'Haxor\'s',
    'Lake',
    'N00b\'s',
    'Moon',
    'Mountain',
    'Not a Scam',
    'Overlords',
    'Pete\'s',
    'Paul\'s',
    'Redneck',
    'River',
    'Spoon',
    'Steve\'s',
    'Temple',
    'Templar',
    'Thor\'s',
    'Thunder',
    'Valley',
    'Wolf',
    'Wolves'
];
PowerCompany.seg3 = [
    'Power',
    'Power Company',
    'Electric',
    'Electric Company',
    'Energy',
    'Public Utilities',
    'Utilities',
];
PowerCompany.generateName = function () {

    return '' +
        PowerCompany.seg1[Math.floor(Math.rand() * PowerCompany.seg1.length)] + ' ' +
        PowerCompany.seg2[Math.floor(Math.rand() * PowerCompany.seg2.length)] + ' ' +
        PowerCompany.seg3[Math.floor(Math.rand() * PowerCompany.seg3.length)];

};
